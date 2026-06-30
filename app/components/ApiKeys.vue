<script setup lang="ts">
interface ApiKeyRow {
  id: string;
  name: string | null;
  start: string | null;
  createdAt: string | Date;
}

const toast = useToast();
const keys = ref<ApiKeyRow[]>([]);
const loading = ref(true);
const newName = ref("");
const creating = ref(false);
const freshKey = ref<string | null>(null);

async function load() {
  loading.value = true;
  const { data, error } = await authClient.apiKey.list();
  loading.value = false;
  if (error) {
    toast.add({ title: "Could not load API keys", color: "error" });
    return;
  }
  keys.value = (data ?? []) as ApiKeyRow[];
}

async function create() {
  creating.value = true;
  const { data, error } = await authClient.apiKey.create({
    name: newName.value.trim() || "MCP key",
  });
  creating.value = false;
  if (error || !data) {
    toast.add({ title: "Could not create key", description: error?.message, color: "error" });
    return;
  }
  freshKey.value = data.key;
  newName.value = "";
  await load();
}

async function remove(id: string) {
  const { error } = await authClient.apiKey.delete({ keyId: id });
  if (error) {
    toast.add({ title: "Could not delete key", color: "error" });
    return;
  }
  if (freshKey.value) freshKey.value = null;
  toast.add({ title: "API key revoked", color: "success", icon: "i-lucide-trash-2" });
  await load();
}

async function copy(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    toast.add({ title: "Copied", icon: "i-lucide-copy", color: "success" });
  } catch {
    toast.add({ title: "Copy failed", color: "error" });
  }
}

const mcpSnippet = computed(() =>
  JSON.stringify(
    {
      mcpServers: {
        nuxtly: {
          url: `${window.location.origin}/mcp`,
          headers: { Authorization: `Bearer ${freshKey.value ?? "<your-api-key>"}` },
        },
      },
    },
    null,
    2,
  ),
);

onMounted(load);
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-key-round" class="size-5 text-primary" />
        <h2 class="font-semibold text-highlighted">API keys for MCP</h2>
      </div>
    </template>

    <div class="space-y-4">
      <p class="text-sm text-muted">
        Generate a key and add it to your MCP client to create and read links
        from your AI assistant.
      </p>

      <div class="flex gap-2">
        <UInput
          v-model="newName"
          placeholder="Key name (e.g. Cursor)"
          class="flex-1"
          @keydown.enter="create"
        />
        <UButton
          label="Generate key"
          icon="i-lucide-plus"
          :loading="creating"
          @click="create"
        />
      </div>

      <UAlert
        v-if="freshKey"
        color="success"
        variant="subtle"
        icon="i-lucide-shield-check"
        title="Copy your new key now"
        description="This is the only time the full key is shown."
      >
        <template #description>
          <div class="space-y-3">
            <p>This is the only time the full key is shown.</p>
            <div class="flex items-center gap-2">
              <code
                class="flex-1 truncate rounded bg-elevated px-2 py-1 text-xs"
                >{{ freshKey }}</code
              >
              <UButton
                icon="i-lucide-copy"
                size="xs"
                variant="soft"
                color="neutral"
                @click="copy(freshKey!)"
              />
            </div>
            <div>
              <p class="mb-1 text-xs font-medium text-default">
                MCP client config:
              </p>
              <pre
                class="overflow-x-auto rounded bg-elevated p-3 text-xs text-default"
              >{{ mcpSnippet }}</pre>
            </div>
          </div>
        </template>
      </UAlert>

      <div v-if="loading" class="py-6 text-center text-muted text-sm">
        Loading keys…
      </div>
      <ul
        v-else-if="keys.length"
        class="divide-y divide-default/60 rounded-lg border border-default/60"
      >
        <li
          v-for="key in keys"
          :key="key.id"
          class="flex items-center justify-between px-3 py-2"
        >
          <div class="min-w-0">
            <p class="font-medium text-default truncate">
              {{ key.name || "Untitled key" }}
            </p>
            <p class="text-xs text-muted font-mono">
              {{ key.start ? `${key.start}…` : "••••" }}
            </p>
          </div>
          <UButton
            icon="i-lucide-trash-2"
            size="xs"
            variant="ghost"
            color="error"
            aria-label="Revoke key"
            @click="remove(key.id)"
          />
        </li>
      </ul>
      <p v-else class="text-sm text-muted">No API keys yet.</p>
    </div>
  </UCard>
</template>
