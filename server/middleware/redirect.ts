import { eq, sql } from "drizzle-orm";
import { links } from "../database/schema";

/**
 * Resolves single-segment paths (e.g. /abc123) to their target URL and issues a
 * 302 redirect, incrementing the click counter. Anything that isn't a known
 * slug (reserved paths, multi-segment paths, unknown slugs) falls through so
 * Nuxt can render the matching page — including the branded 404 in
 * `app/pages/[slug].vue`.
 */
export default defineEventHandler((event) => {
  if (event.method !== "GET" && event.method !== "HEAD") return;

  const segments = getRequestURL(event).pathname.split("/").filter(Boolean);
  if (segments.length !== 1) return;

  const slug = segments[0]!;
  if (isReservedSlug(slug) || !isValidSlug(slug)) return;

  const db = useDb();
  const link = db
    .select()
    .from(links)
    .where(eq(links.slug, slug))
    .get();

  if (!link) return; // fall through → branded 404 page

  // Intentional open redirect: this is a URL shortener, so sending visitors to
  // arbitrary user-supplied targets is the core feature. Targets are restricted
  // to http/https at creation time (see normalizeTargetUrl).
  db.update(links)
    .set({ clickCount: sql`${links.clickCount} + 1` })
    .where(eq(links.id, link.id))
    .run();

  return sendRedirect(event, link.target, 302);
});
