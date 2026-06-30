import { desc, eq } from "drizzle-orm";
import { links } from "../../database/schema";

export default defineMcpTool({
  description: "List all short links owned by the authenticated user.",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  enabled: (event) => Boolean(event.context.user),
  handler: async () => {
    const event = useEvent();
    const userId = requireMcpUser(event);

    const rows = await useDb()
      .select()
      .from(links)
      .where(eq(links.userId, userId))
      .orderBy(desc(links.createdAt));

    return rows.map((link) => toLinkDto(event, link));
  },
});
