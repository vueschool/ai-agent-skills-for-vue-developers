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
    .join("")
    .slice(0, 2)
    .toUpperCase(),
);
</script>

<template>
  <UCard
    variant="subtle"
    class="h-full transition-shadow hover:shadow-md"
    :ui="{ body: 'flex flex-col gap-3' }"
  >
    <UUser
      :name="user.name"
      :description="user.email"
      :avatar="{ text: initials, alt: user.name }"
      size="lg"
      :ui="{ description: 'truncate' }"
    />
    <UBadge
      icon="i-lucide-map-pin"
      color="neutral"
      variant="soft"
      class="self-start"
    >
      {{ user.city }}
    </UBadge>
  </UCard>
</template>
