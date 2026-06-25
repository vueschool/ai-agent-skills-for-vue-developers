<script setup lang="ts">
definePageMeta({ middleware: "auth" });

interface LinkDto {
  id: string;
  slug: string;
  target: string;
  clickCount: number;
  createdAt: string;
  shortUrl: string;
}

const { data: links, refresh } = await useFetch<LinkDto[]>("/api/links", {
  key: "links",
  headers: import.meta.server ? useRequestHeaders(["cookie"]) : undefined,
  default: () => [],
});
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 sm:px-6 py-10 space-y-6">
    <div>
      <h1 class="text-2xl font-bold text-highlighted">Dashboard</h1>
      <p class="text-muted">Create and manage your short links.</p>
    </div>

    <CreateLinkForm @created="refresh" />
    <LinkList :links="links" @changed="refresh" />
    <ApiKeys />
  </div>
</template>
