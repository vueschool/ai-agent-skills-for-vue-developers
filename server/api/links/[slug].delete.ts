import { and, eq } from "drizzle-orm";
import { links } from "../../database/schema";

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);
  const slug = getRouterParam(event, "slug")!;
  const db = useDb();

  const [deleted] = await db
    .delete(links)
    .where(and(eq(links.slug, slug), eq(links.userId, user.id)))
    .returning({ id: links.id });

  if (!deleted) {
    throw createError({ statusCode: 404, statusMessage: "Link not found." });
  }

  return { success: true };
});
