<script setup lang="ts">
import type { User } from "~/types/user";

defineProps<{
  user: User;
}>();
</script>

<template>
  <li class="user-card">
    <span class="user-card-name">{{ user.name }}</span>
    <a class="user-card-email" :href="`mailto:${user.email}`">
      {{ user.email }}
    </a>
    <span class="user-card-city">{{ user.city }}</span>
  </li>
</template>

<style scoped>
.user-card {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 1.25rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  background: #fff;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.user-card:hover {
  border-color: #c7d2fe;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
}

.user-card-name {
  font-size: 1.0625rem;
  font-weight: 600;
  color: #0f172a;
}

.user-card-email {
  font-size: 0.875rem;
  color: #6366f1;
  text-decoration: none;
}

.user-card-email:hover {
  text-decoration: underline;
}

.user-card-city {
  font-size: 0.8125rem;
  color: #64748b;
}
</style>
