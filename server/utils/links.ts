import type { H3Event } from "h3";
import { eq } from "drizzle-orm";
import { links, type Link } from "../database/schema";

/**
 * Insert a link, translating a slug uniqueness violation into a clean 409.
 * This guards the check-then-insert race where two concurrent requests both
 * pass the "is this alias free?" check before either has committed.
 */
export async function insertLink(values: {
  slug: string;
  target: string;
  userId: string;
}): Promise<Link> {
  const db = useDb();
  try {
    const [link] = await db.insert(links).values(values).returning();
    return link!;
  } catch (error) {
    if (isUniqueConstraintError(error)) {
      throw createError({
        statusCode: 409,
        statusMessage: `The alias '${values.slug}' is already taken.`,
      });
    }
    throw error;
  }
}

function isUniqueConstraintError(error: unknown): boolean {
  const code = (error as { code?: string })?.code;
  if (code === "SQLITE_CONSTRAINT_UNIQUE" || code === "SQLITE_CONSTRAINT") {
    return true;
  }
  return /UNIQUE constraint failed/i.test(String((error as Error)?.message));
}

export function getBaseUrl(event: H3Event): string {
  const configured = useRuntimeConfig(event).public.shortBaseUrl as string;
  if (configured) return configured.replace(/\/+$/, "");
  return getRequestURL(event).origin;
}

export function toLinkDto(event: H3Event, link: Link) {
  return {
    id: link.id,
    slug: link.slug,
    target: link.target,
    clickCount: link.clickCount,
    createdAt: link.createdAt,
    shortUrl: `${getBaseUrl(event)}/${link.slug}`,
  };
}

/** Generate a random slug that isn't reserved or already taken. */
export async function createUniqueSlug(): Promise<string> {
  const db = useDb();
  for (let attempt = 0; attempt < 10; attempt++) {
    const slug = generateSlug();
    if (isReservedSlug(slug)) continue;
    const existing = db
      .select({ id: links.id })
      .from(links)
      .where(eq(links.slug, slug))
      .get();
    if (!existing) return slug;
  }
  throw createError({
    statusCode: 500,
    statusMessage: "Could not generate a unique slug, please try again.",
  });
}
