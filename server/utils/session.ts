import type { H3Event } from "h3";

export async function getSessionUser(event: H3Event) {
  const session = await auth.api.getSession({ headers: event.headers });
  return session?.user ?? null;
}

export async function requireUser(event: H3Event) {
  const user = await getSessionUser(event);
  if (!user) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
  return user;
}

/**
 * Resolve the API-key user that the MCP middleware placed on the event context.
 * Tools are already hidden via `enabled` guards when unauthenticated; this is
 * defense-in-depth so a handler never dereferences an undefined user.
 */
export function requireMcpUser(event: H3Event): string {
  const id = (event.context.user as { id?: string } | undefined)?.id;
  if (!id) {
    throw createError({
      statusCode: 401,
      statusMessage: "A valid Nuxtly API key is required.",
    });
  }
  return id;
}
