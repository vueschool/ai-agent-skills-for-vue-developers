<script setup lang="ts">
interface User {
  id: number;
  name: string;
  email: string;
  city: string;
}

const search = ref("");

const { data: users, status } = await useFetch<User[]>("/api/users", {
  query: { q: search },
});

const isPending = computed(() => status.value === "pending");
</script>

<template>
  <div class="page">
    <NuxtRouteAnnouncer />

    <header class="header">
      <h1>Users</h1>
      <p class="subtitle">Browse and search the user directory.</p>
    </header>

    <div class="search">
      <input
        v-model="search"
        type="search"
        class="search-input"
        placeholder="Search by name, email, or city…"
        autocomplete="off"
      />
    </div>

    <p class="meta">
      <span v-if="isPending">Searching…</span>
      <span v-else>{{ users?.length ?? 0 }} user{{ (users?.length ?? 0) === 1 ? "" : "s" }} found</span>
    </p>

    <ul v-if="users && users.length" class="user-list">
      <li v-for="user in users" :key="user.id" class="user-card">
        <div class="avatar">{{ user.name.charAt(0) }}</div>
        <div class="user-info">
          <span class="user-name">{{ user.name }}</span>
          <a class="user-email" :href="`mailto:${user.email}`">{{ user.email }}</a>
          <span class="user-city">{{ user.city }}</span>
        </div>
      </li>
    </ul>

    <p v-else-if="!isPending" class="empty">No users match your search.</p>
  </div>
</template>

<style scoped>
.page {
  max-width: 720px;
  margin: 0 auto;
  padding: 2.5rem 1.25rem 4rem;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: #1f2937;
}

.header {
  margin-bottom: 1.5rem;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
}

.subtitle {
  margin: 0.25rem 0 0;
  color: #6b7280;
}

.search {
  margin-bottom: 1rem;
}

.search-input {
  width: 100%;
  box-sizing: border-box;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.625rem;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
}

.search-input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
}

.meta {
  margin: 0 0 1rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.user-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.75rem;
}

.user-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  background: #fff;
  transition: box-shadow 0.15s, transform 0.15s;
}

.user-card:hover {
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
  transform: translateY(-1px);
}

.avatar {
  flex-shrink: 0;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
}

.user-info {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  min-width: 0;
}

.user-name {
  font-weight: 600;
}

.user-email {
  color: #6366f1;
  text-decoration: none;
  font-size: 0.9rem;
}

.user-email:hover {
  text-decoration: underline;
}

.user-city {
  color: #6b7280;
  font-size: 0.85rem;
}

.empty {
  padding: 2rem;
  text-align: center;
  color: #9ca3af;
  border: 1px dashed #d1d5db;
  border-radius: 0.75rem;
}
</style>
