<script setup lang="ts">
const model = defineModel<string>({ default: "" });
</script>

<template>
  <UFormField label="Search users">
    <UInput
      v-model="model"
      icon="i-lucide-search"
      size="lg"
      type="search"
      placeholder="Search by name, email, or city..."
      autocomplete="off"
      class="w-full"
    />
  </UFormField>
</template>
