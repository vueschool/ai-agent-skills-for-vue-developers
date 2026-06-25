<script setup lang="ts">
import { computed } from "vue";
import UserSearch from "./UserSearch.vue";
import UserList from "./UserList.vue";
import { useUsers } from "~/composables/useUsers";

const { searchQuery, users, isLoading, error } = useUsers();

const hasError = computed(() => Boolean(error.value));
</script>

<template>
  <UContainer class="py-10">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-1">
        <h1 class="text-2xl font-bold text-highlighted">Users</h1>
        <p class="text-muted">
          Browse and search the full directory of users.
        </p>
      </div>

      <UserSearch v-model="searchQuery" />

      <UserList :users="users" :is-loading="isLoading" :has-error="hasError" />
    </div>
  </UContainer>
</template>
