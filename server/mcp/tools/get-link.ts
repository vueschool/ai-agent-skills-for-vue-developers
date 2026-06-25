import { z } from "zod";
import { and, eq } from "drizzle-orm";
import { links } from "../../database/schema";

export default defineMcpTool({
  description:
    "Get a single short link owned by the authenticated user, by its slug.",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  enabled: (event) => Boolean(event.context.user),
  inputSchema: {
    slug: z.string().describe("The short link slug to look up"),
  },
  inputExamples: [{ slug: "nuxt" }],
  handler: async ({ slug }) => {
    const event = useEvent();
    const userId = event.context.user.id as string;

    const link = useDb()
      .select()
      .from(links)
      .where(and(eq(links.slug, slug), eq(links.userId, userId)))
      .get();

    if (!link) {
      throw createError({ statusCode: 404, message: `No link found for '${slug}'.` });
    }

    return toLinkDto(event, link);
  },
});
