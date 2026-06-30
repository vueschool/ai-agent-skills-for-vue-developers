<script setup lang="ts">
const { data: me } = await useMe();

async function handleSignOut() {
  await authClient.signOut();
  await refreshNuxtData("me");
  await navigateTo("/");
}
</script>

<template>
  <div class="min-h-dvh bg-default text-default flex flex-col">
    <header
      class="border-b border-default/60 bg-elevated/40 backdrop-blur sticky top-0 z-10"
    >
      <div
        class="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6"
      >
        <NuxtLink to="/" class="flex items-center gap-2 font-semibold text-lg">
          <UIcon name="i-lucide-link" class="text-primary size-6" />
          <span>Nuxtly</span>
        </NuxtLink>

        <div class="flex items-center gap-2">
          <template v-if="me?.user">
            <UButton
              to="/dashboard"
              variant="ghost"
              color="neutral"
              icon="i-lucide-layout-dashboard"
              label="Dashboard"
            />
            <UButton
              variant="soft"
              color="neutral"
              icon="i-lucide-log-out"
              label="Sign out"
              @click="handleSignOut"
            />
          </template>
          <template v-else>
            <UButton
              to="/sign-in"
              variant="ghost"
              color="neutral"
              label="Sign in"
            />
            <UButton to="/sign-up" color="primary" label="Get started" />
          </template>
        </div>
      </div>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="border-t border-default/60">
      <div
        class="mx-auto max-w-5xl px-4 sm:px-6 py-6 text-sm text-muted flex items-center justify-between"
      >
        <span>Nuxtly — short links with an MCP server.</span>
        <a
          href="/mcp"
          class="hover:text-default transition-colors inline-flex items-center gap-1"
        >
          <UIcon name="i-lucide-plug" class="size-4" />
          MCP endpoint
        </a>
      </div>
    </footer>
  </div>
</template>
