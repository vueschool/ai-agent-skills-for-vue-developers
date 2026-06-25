<script setup lang="ts">
import { computed } from "vue";
import type { User } from "~/types/user";

const props = defineProps<{
  user: User;
}>();

const initials = computed(() =>
  props.user.name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase(),
);
</script>

<template>
  <UPageCard spotlight class="h-full">
    <div class="flex items-center gap-3">
      <UAvatar :text="initials" :alt="user.name" size="lg" />
      <div class="min-w-0">
        <p class="truncate font-semibold text-highlighted">{{ user.name }}</p>
        <ULink
          :to="`mailto:${user.email}`"
          class="block truncate text-sm text-muted hover:text-primary"
        >
          {{ user.email }}
        </ULink>
      </div>
    </div>

    <template #footer>
      <UBadge
        color="neutral"
        variant="subtle"
        icon="i-lucide-map-pin"
        :label="user.city"
      />
    </template>
  </UPageCard>
</template>
