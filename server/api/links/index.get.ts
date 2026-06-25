import { desc, eq } from "drizzle-orm";
import { links } from "../../database/schema";

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);
  const db = useDb();

  const rows = await db
    .select()
    .from(links)
    .where(eq(links.userId, user.id))
    .orderBy(desc(links.createdAt));

  return rows.map((link) => toLinkDto(event, link));
});
