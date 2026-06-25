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
    description="We couldn't load users. Please try again."
  />

  <div
    v-else-if="isLoading"
    class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
  >
    <USkeleton v-for="n in 6" :key="n" class="h-32 w-full rounded-lg" />
  </div>

  <div
    v-else-if="users.length === 0"
    class="flex flex-col items-center gap-2 py-16 text-center text-muted"
  >
    <UIcon name="i-lucide-users" class="size-8" />
    <p>No users match your search.</p>
  </div>

  <div v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <UserCard v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>
