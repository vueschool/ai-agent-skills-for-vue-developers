import type { H3Event } from "h3";
import { eq } from "drizzle-orm";
import { links, type Link } from "../database/schema";

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
