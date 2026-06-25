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
