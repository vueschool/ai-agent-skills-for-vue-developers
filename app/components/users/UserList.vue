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
  <p v-if="hasError" class="user-list-status user-list-status--error">
    Something went wrong while loading users.
  </p>
  <p v-else-if="isLoading" class="user-list-status">Loading users...</p>
  <p v-else-if="users.length === 0" class="user-list-status">
    No users match your search.
  </p>
  <ul v-else class="user-list">
    <UserCard v-for="user in users" :key="user.id" :user="user" />
  </ul>
</template>

<style scoped>
.user-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 0.875rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.user-list-status {
  padding: 2rem 0;
  text-align: center;
  color: #64748b;
}

.user-list-status--error {
  color: #dc2626;
}
</style>
