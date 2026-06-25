<script setup lang="ts">
import UserCard from "./UserCard.vue";
import type { User } from "~/types/user";

defineProps<{
  users: User[];
  isLoading: boolean;
  hasError: boolean;
}>();
</script>

<template>
  <UAlert
    v-if="hasError"
    color="error"
    variant="subtle"
    icon="i-lucide-circle-alert"
    title="Something went wrong"
    description="We couldn't load the users. Please try again."
  />

  <UPageGrid v-else-if="isLoading">
    <UPageCard v-for="n in 6" :key="n">
      <div class="flex items-center gap-3">
        <USkeleton class="size-10 rounded-full" />
        <div class="flex-1 space-y-2">
          <USkeleton class="h-4 w-2/3" />
          <USkeleton class="h-3 w-full" />
        </div>
      </div>
    </UPageCard>
  </UPageGrid>

  <div
    v-else-if="users.length === 0"
    class="flex flex-col items-center justify-center gap-2 py-16 text-center"
  >
    <UIcon name="i-lucide-users" class="size-10 text-dimmed" />
    <p class="font-medium text-default">No users found</p>
    <p class="text-sm text-muted">Try adjusting your search.</p>
  </div>

  <UPageGrid v-else>
    <UserCard v-for="user in users" :key="user.id" :user="user" />
  </UPageGrid>
</template>
