import { and, eq } from "drizzle-orm";
import { links } from "../../database/schema";

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);
  const slug = getRouterParam(event, "slug")!;
  const db = useDb();

  const link = db
    .select()
    .from(links)
    .where(and(eq(links.slug, slug), eq(links.userId, user.id)))
    .get();

  if (!link) {
    throw createError({ statusCode: 404, statusMessage: "Link not found." });
  }

  return toLinkDto(event, link);
});
