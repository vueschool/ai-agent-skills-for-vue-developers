import { z } from "zod";
import { eq } from "drizzle-orm";
import { links } from "../../database/schema";

const bodySchema = z.object({
  target: z.string().min(1, "A target URL is required."),
  slug: z.string().optional(),
});

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);
  const { target, slug: requestedSlug } = await readValidatedBody(
    event,
    bodySchema.parse,
  );

  const normalizedTarget = normalizeTargetUrl(target);
  const db = useDb();

  let slug: string;
  if (requestedSlug && requestedSlug.trim()) {
    slug = requestedSlug.trim();
    if (!isValidSlug(slug)) {
      throw createError({
        statusCode: 400,
        statusMessage:
          "Custom alias may only contain letters, numbers, hyphens and underscores (max 64 chars).",
      });
    }
    if (isReservedSlug(slug)) {
      throw createError({
        statusCode: 409,
        statusMessage: `'${slug}' is reserved and cannot be used.`,
      });
    }
    const existing = db
      .select({ id: links.id })
      .from(links)
      .where(eq(links.slug, slug))
      .get();
    if (existing) {
      throw createError({
        statusCode: 409,
        statusMessage: `The alias '${slug}' is already taken.`,
      });
    }
  } else {
    slug = await createUniqueSlug();
  }

  const link = await insertLink({
    slug,
    target: normalizedTarget,
    userId: user.id,
  });

  setResponseStatus(event, 201);
  return toLinkDto(event, link);
});
