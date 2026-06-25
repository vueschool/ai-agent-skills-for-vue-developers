export default defineNuxtRouteMiddleware(async () => {
  const headers = import.meta.server ? useRequestHeaders(["cookie"]) : undefined;
  const { user } = await $fetch("/api/me", { headers });
  if (!user) {
    return navigateTo("/sign-in");
  }
});
