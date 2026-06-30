<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Enter a valid email"),
  password: z.string().min(8, "Use at least 8 characters"),
});
type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({ name: "", email: "", password: "" });
const loading = ref(false);
const toast = useToast();

async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true;
  const { error } = await authClient.signUp.email({
    name: event.data.name,
    email: event.data.email,
    password: event.data.password,
  });
  loading.value = false;

  if (error) {
    toast.add({
      title: "Sign up failed",
      description: error.message ?? "Please try again.",
      color: "error",
    });
    return;
  }

  await refreshNuxtData("me");
  await navigateTo("/dashboard");
}
</script>

<template>
  <div class="flex min-h-[calc(100dvh-4rem)] items-center justify-center px-4">
    <UCard class="w-full max-w-sm">
      <template #header>
        <div class="text-center">
          <UIcon name="i-lucide-link" class="mx-auto size-8 text-primary" />
          <h1 class="mt-2 text-xl font-semibold text-highlighted">
            Create your account
          </h1>
          <p class="mt-1 text-sm text-muted">
            Start shortening links in seconds
          </p>
        </div>
      </template>

      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormField name="name" label="Name" required>
          <UInput v-model="state.name" placeholder="Ada Lovelace" class="w-full" />
        </UFormField>

        <UFormField name="email" label="Email" required>
          <UInput
            v-model="state.email"
            type="email"
            placeholder="you@example.com"
            class="w-full"
          />
        </UFormField>

        <UFormField name="password" label="Password" required>
          <UInput
            v-model="state.password"
            type="password"
            placeholder="At least 8 characters"
            class="w-full"
          />
        </UFormField>

        <UButton type="submit" label="Create account" block :loading="loading" />
      </UForm>

      <template #footer>
        <p class="text-center text-sm text-muted">
          Already have an account?
          <NuxtLink to="/sign-in" class="text-primary font-medium"
            >Sign in</NuxtLink
          >
        </p>
      </template>
    </UCard>
  </div>
</template>
