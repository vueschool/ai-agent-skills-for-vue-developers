import { z } from "zod";
import { and, eq } from "drizzle-orm";
import { links } from "../../database/schema";

const bodySchema = z.object({
  target: z.string().min(1, "A target URL is required."),
});

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);
  const slug = getRouterParam(event, "slug")!;
  const { target } = await readValidatedBody(event, bodySchema.parse);
  const normalizedTarget = normalizeTargetUrl(target);
  const db = useDb();

  const [updated] = await db
    .update(links)
    .set({ target: normalizedTarget })
    .where(and(eq(links.slug, slug), eq(links.userId, user.id)))
    .returning();

  if (!updated) {
    throw createError({ statusCode: 404, statusMessage: "Link not found." });
  }

  return toLinkDto(event, updated);
});
