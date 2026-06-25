<script setup lang="ts">
const model = defineModel<string>({ default: "" });
</script>

<template>
  <div class="user-search">
    <label class="user-search-label" for="user-search-input">
      Search users
    </label>
    <input
      id="user-search-input"
      v-model="model"
      class="user-search-input"
      type="search"
      placeholder="Search by name, email, or city..."
      autocomplete="off"
    />
  </div>
</template>

<style scoped>
.user-search {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.user-search-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #475569;
}

.user-search-input {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.625rem;
  background: #fff;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.user-search-input:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
}
</style>
