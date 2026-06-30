interface MeResponse {
  user: { id: string; name: string; email: string } | null;
}

/**
 * Shared session lookup. Uses a stable key so every caller dedupes against the
 * same request and updates together after `refreshNuxtData('me')`.
 */
export function useMe() {
  return useFetch<MeResponse>("/api/me", {
    key: "me",
    headers: import.meta.server ? useRequestHeaders(["cookie"]) : undefined,
    default: () => ({ user: null }),
  });
}
