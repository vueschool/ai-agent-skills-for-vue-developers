<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const emit = defineEmits<{ created: [] }>();

const schema = z.object({
  target: z.string().min(1, "Enter a URL to shorten"),
  slug: z
    .string()
    .regex(/^[A-Za-z0-9_-]*$/, "Only letters, numbers, '-' and '_'")
    .optional(),
});
type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({ target: "", slug: "" });
const loading = ref(false);
const toast = useToast();

async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true;
  try {
    const link = await $fetch("/api/links", {
      method: "POST",
      body: { target: event.data.target, slug: event.data.slug || undefined },
    });
    toast.add({
      title: "Short link created",
      description: link.shortUrl,
      color: "success",
      icon: "i-lucide-check",
    });
    state.target = "";
    state.slug = "";
    emit("created");
  } catch (err: any) {
    toast.add({
      title: "Could not create link",
      description: err?.data?.statusMessage ?? err?.statusMessage ?? "Something went wrong.",
      color: "error",
      icon: "i-lucide-triangle-alert",
    });
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-scissors" class="size-5 text-primary" />
        <h2 class="font-semibold text-highlighted">Create a short link</h2>
      </div>
    </template>

    <UForm
      :schema="schema"
      :state="state"
      class="flex flex-col gap-4 sm:flex-row sm:items-start"
      @submit="onSubmit"
    >
      <UFormField name="target" label="Destination URL" required class="flex-1">
        <UInput
          v-model="state.target"
          placeholder="https://example.com/a/very/long/url"
          icon="i-lucide-globe"
          class="w-full"
        />
      </UFormField>

      <UFormField
        name="slug"
        label="Custom alias"
        hint="Optional"
        class="sm:w-48"
      >
        <UInput v-model="state.slug" placeholder="my-alias" class="w-full" />
      </UFormField>

      <UButton
        type="submit"
        label="Shorten"
        icon="i-lucide-zap"
        :loading="loading"
        class="sm:mt-6"
      />
    </UForm>
  </UCard>
</template>
