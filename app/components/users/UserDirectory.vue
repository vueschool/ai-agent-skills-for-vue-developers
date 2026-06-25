<script setup lang="ts">
import { computed } from "vue";
import UserSearch from "./UserSearch.vue";
import UserList from "./UserList.vue";
import { useUsers } from "~/composables/useUsers";

const { searchQuery, users, isLoading, error } = useUsers();

const hasError = computed(() => Boolean(error.value));
</script>

<template>
  <UContainer class="flex max-w-4xl flex-col gap-6 py-10">
    <header class="flex flex-col gap-1">
      <div class="flex items-center gap-3">
        <h1 class="text-3xl font-bold text-highlighted">Users</h1>
        <UBadge v-if="!isLoading && !hasError" color="neutral" variant="soft">
          {{ users.length }}
        </UBadge>
      </div>
      <p class="text-muted">
        Browse and search the full directory of users.
      </p>
    </header>

    <UserSearch v-model="searchQuery" />

    <UserList :users="users" :is-loading="isLoading" :has-error="hasError" />
  </UContainer>
</template>
