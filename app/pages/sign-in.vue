<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const schema = z.object({
  email: z.email("Enter a valid email"),
  password: z.string().min(1, "Password is required"),
});
type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({ email: "", password: "" });
const loading = ref(false);
const toast = useToast();

async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true;
  const { error } = await authClient.signIn.email({
    email: event.data.email,
    password: event.data.password,
  });
  loading.value = false;

  if (error) {
    toast.add({
      title: "Sign in failed",
      description: error.message ?? "Check your credentials and try again.",
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
            Welcome back
          </h1>
          <p class="mt-1 text-sm text-muted">Sign in to your Nuxtly account</p>
        </div>
      </template>

      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
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
            placeholder="••••••••"
            class="w-full"
          />
        </UFormField>

        <UButton
          type="submit"
          label="Sign in"
          block
          :loading="loading"
        />
      </UForm>

      <template #footer>
        <p class="text-center text-sm text-muted">
          Don't have an account?
          <NuxtLink to="/sign-up" class="text-primary font-medium"
            >Sign up</NuxtLink
          >
        </p>
      </template>
    </UCard>
  </div>
</template>
