<script setup lang="ts">
const model = defineModel<string>({ default: "" });
</script>

<template>
  <UInput
    v-model="model"
    type="search"
    icon="i-lucide-search"
    size="lg"
    class="w-full"
    placeholder="Search by name, email, or city..."
    autocomplete="off"
  />
</template>
