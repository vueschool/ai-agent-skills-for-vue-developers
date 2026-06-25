<script setup lang="ts">
const { data: me } = await useMe();
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 sm:px-6">
    <section class="py-20 sm:py-28 text-center">
      <UBadge
        color="primary"
        variant="subtle"
        size="lg"
        class="mb-6"
        icon="i-lucide-sparkles"
        label="Short links + Model Context Protocol"
      />
      <h1 class="text-4xl sm:text-6xl font-bold tracking-tight text-highlighted">
        Shorten links.<br />
        <span class="text-primary">Automate them with AI.</span>
      </h1>
      <p class="mx-auto mt-6 max-w-2xl text-lg text-muted">
        Nuxtly turns long URLs into tidy short links you can manage from a
        dashboard, a REST API, or directly from your AI assistant over MCP.
      </p>

      <div class="mt-10 flex items-center justify-center gap-3">
        <UButton
          v-if="me?.user"
          to="/dashboard"
          size="xl"
          icon="i-lucide-layout-dashboard"
          label="Open dashboard"
        />
        <template v-else>
          <UButton
            to="/sign-up"
            size="xl"
            icon="i-lucide-arrow-right"
            trailing
            label="Get started free"
          />
          <UButton
            to="/sign-in"
            size="xl"
            variant="subtle"
            color="neutral"
            label="Sign in"
          />
        </template>
      </div>
    </section>

    <section class="grid gap-6 sm:grid-cols-3 pb-24">
      <UCard>
        <div class="flex flex-col gap-2">
          <UIcon name="i-lucide-scissors" class="size-7 text-primary" />
          <h3 class="font-semibold text-highlighted">Instant short links</h3>
          <p class="text-sm text-muted">
            Auto-generated codes or your own custom alias, with live click
            tracking.
          </p>
        </div>
      </UCard>
      <UCard>
        <div class="flex flex-col gap-2">
          <UIcon name="i-lucide-code-2" class="size-7 text-primary" />
          <h3 class="font-semibold text-highlighted">REST API</h3>
          <p class="text-sm text-muted">
            Full CRUD over <code class="text-default">/api/links</code> secured
            by your account session.
          </p>
        </div>
      </UCard>
      <UCard>
        <div class="flex flex-col gap-2">
          <UIcon name="i-lucide-plug" class="size-7 text-primary" />
          <h3 class="font-semibold text-highlighted">MCP server</h3>
          <p class="text-sm text-muted">
            Create and read links from any MCP client using a personal API key.
          </p>
        </div>
      </UCard>
    </section>
  </div>
</template>
