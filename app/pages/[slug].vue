<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

// This page only renders when the server redirect middleware did NOT find a
// matching slug, so it always represents a missing link.
const event = useRequestEvent();
if (import.meta.server && event) {
  setResponseStatus(event, 404);
}
</script>

<template>
  <div class="flex min-h-[calc(100dvh-4rem)] items-center justify-center px-4">
    <div class="text-center max-w-md">
      <UIcon name="i-lucide-link-2-off" class="mx-auto size-12 text-muted" />
      <h1 class="mt-4 text-3xl font-bold text-highlighted">Link not found</h1>
      <p class="mt-2 text-muted">
        The short link
        <code class="text-default">/{{ slug }}</code>
        doesn't exist or has been removed.
      </p>
      <div class="mt-8 flex items-center justify-center gap-3">
        <UButton to="/" icon="i-lucide-home" label="Go home" />
        <UButton
          to="/dashboard"
          variant="subtle"
          color="neutral"
          icon="i-lucide-layout-dashboard"
          label="Dashboard"
        />
      </div>
    </div>
  </div>
</template>
