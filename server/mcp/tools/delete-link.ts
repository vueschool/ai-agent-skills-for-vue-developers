import { z } from "zod";
import { and, eq } from "drizzle-orm";
import { links } from "../../database/schema";

export default defineMcpTool({
  description: "Delete a short link owned by the authenticated user, by its slug.",
  annotations: { destructiveHint: true, idempotentHint: true, openWorldHint: false },
  enabled: (event) => Boolean(event.context.user),
  inputSchema: {
    slug: z.string().describe("The slug of the link to delete"),
  },
  inputExamples: [{ slug: "nuxt" }],
  handler: async ({ slug }) => {
    const event = useEvent();
    const userId = event.context.user.id as string;

    const [deleted] = await useDb()
      .delete(links)
      .where(and(eq(links.slug, slug), eq(links.userId, userId)))
      .returning({ slug: links.slug });

    if (!deleted) {
      throw createError({ statusCode: 404, message: `No link found for '${slug}'.` });
    }

    return `Deleted short link '${slug}'.`;
  },
});
