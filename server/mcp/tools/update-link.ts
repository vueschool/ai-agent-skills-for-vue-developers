import { z } from "zod";
import { and, eq } from "drizzle-orm";
import { links } from "../../database/schema";

export default defineMcpTool({
  description:
    "Update the destination URL of an existing short link owned by the authenticated user.",
  annotations: { idempotentHint: true, openWorldHint: false },
  enabled: (event) => Boolean(event.context.user),
  inputSchema: {
    slug: z.string().describe("The slug of the link to update"),
    target: z.string().describe("The new destination URL (http or https)"),
  },
  inputExamples: [{ slug: "nuxt", target: "https://nuxt.com/docs" }],
  handler: async ({ slug, target }) => {
    const event = useEvent();
    const userId = event.context.user.id as string;
    const normalizedTarget = normalizeTargetUrl(target);

    const [updated] = await useDb()
      .update(links)
      .set({ target: normalizedTarget })
      .where(and(eq(links.slug, slug), eq(links.userId, userId)))
      .returning();

    if (!updated) {
      throw createError({ statusCode: 404, message: `No link found for '${slug}'.` });
    }

    return toLinkDto(event, updated);
  },
});
