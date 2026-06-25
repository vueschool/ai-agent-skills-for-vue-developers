import { z } from "zod";
import { eq } from "drizzle-orm";
import { links } from "../../database/schema";

export default defineMcpTool({
  description:
    "Create a short link for a destination URL. Optionally supply a custom alias; otherwise a random short code is generated.",
  annotations: { idempotentHint: false, openWorldHint: false },
  enabled: (event) => Boolean(event.context.user),
  inputSchema: {
    target: z
      .string()
      .describe("The destination URL to shorten (must be http or https)"),
    alias: z
      .string()
      .optional()
      .describe(
        "Optional custom alias (letters, numbers, '-' and '_'). Omit for a random code.",
      ),
  },
  inputExamples: [
    { target: "https://example.com" },
    { target: "https://nuxt.com", alias: "nuxt" },
  ],
  handler: async ({ target, alias }) => {
    const event = useEvent();
    const userId = event.context.user.id as string;
    const db = useDb();
    const normalizedTarget = normalizeTargetUrl(target);

    let slug: string;
    if (alias?.trim()) {
      slug = alias.trim();
      if (!isValidSlug(slug)) {
        throw createError({
          statusCode: 400,
          message:
            "Alias may only contain letters, numbers, hyphens and underscores (max 64 chars).",
        });
      }
      if (isReservedSlug(slug)) {
        throw createError({
          statusCode: 409,
          message: `'${slug}' is reserved and cannot be used.`,
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
          message: `The alias '${slug}' is already taken.`,
        });
      }
    } else {
      slug = await createUniqueSlug();
    }

    const [link] = await db
      .insert(links)
      .values({ slug, target: normalizedTarget, userId })
      .returning();

    return toLinkDto(event, link);
  },
});
