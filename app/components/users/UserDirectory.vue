<script setup lang="ts">
import { computed } from "vue";
import UserSearch from "./UserSearch.vue";
import UserList from "./UserList.vue";
import { useUsers } from "~/composables/useUsers";

const { searchQuery, users, isLoading, error } = useUsers();

const hasError = computed(() => Boolean(error.value));
</script>

<template>
  <section class="user-directory">
    <header class="user-directory-header">
      <h1 class="user-directory-title">Users</h1>
      <p class="user-directory-subtitle">
        Browse and search the full directory of users.
      </p>
    </header>

    <UserSearch v-model="searchQuery" />

    <UserList
      :users="users"
      :is-loading="isLoading"
      :has-error="hasError"
    />
  </section>
</template>

<style scoped>
.user-directory {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 960px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
}

.user-directory-header {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.user-directory-title {
  margin: 0;
  font-size: 1.875rem;
  font-weight: 700;
  color: #0f172a;
}

.user-directory-subtitle {
  margin: 0;
  color: #64748b;
}
</style>
