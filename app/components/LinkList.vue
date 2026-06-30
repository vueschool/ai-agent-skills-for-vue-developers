<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

interface LinkDto {
  id: string;
  slug: string;
  target: string;
  clickCount: number;
  createdAt: string;
  shortUrl: string;
}

const props = defineProps<{ links: LinkDto[] }>();
const emit = defineEmits<{ changed: [] }>();

const toast = useToast();

const dateFmt = new Intl.DateTimeFormat(undefined, {
  dateStyle: "medium",
});

async function copy(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    toast.add({ title: "Copied", description: text, icon: "i-lucide-copy", color: "success" });
  } catch {
    toast.add({ title: "Copy failed", color: "error" });
  }
}

// --- edit ---
const editOpen = ref(false);
const editing = ref<LinkDto | null>(null);
const editSchema = z.object({ target: z.string().min(1, "Enter a URL") });
type EditSchema = z.output<typeof editSchema>;
const editState = reactive<Partial<EditSchema>>({ target: "" });
const editLoading = ref(false);

function openEdit(link: LinkDto) {
  editing.value = link;
  editState.target = link.target;
  editOpen.value = true;
}

async function onEdit(event: FormSubmitEvent<EditSchema>) {
  if (!editing.value) return;
  editLoading.value = true;
  try {
    await $fetch(`/api/links/${editing.value.slug}`, {
      method: "PATCH",
      body: { target: event.data.target },
    });
    toast.add({ title: "Link updated", color: "success", icon: "i-lucide-check" });
    editOpen.value = false;
    emit("changed");
  } catch (err: any) {
    toast.add({
      title: "Update failed",
      description: err?.data?.statusMessage ?? "Something went wrong.",
      color: "error",
    });
  } finally {
    editLoading.value = false;
  }
}

// --- delete ---
const deletingSlug = ref<string | null>(null);

async function remove(link: LinkDto) {
  deletingSlug.value = link.slug;
  try {
    await $fetch(`/api/links/${link.slug}`, { method: "DELETE" });
    toast.add({ title: "Link deleted", color: "success", icon: "i-lucide-trash-2" });
    emit("changed");
  } catch (err: any) {
    toast.add({
      title: "Delete failed",
      description: err?.data?.statusMessage ?? "Something went wrong.",
      color: "error",
    });
  } finally {
    deletingSlug.value = null;
  }
}
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <UIcon name="i-lucide-list" class="size-5 text-primary" />
          <h2 class="font-semibold text-highlighted">Your links</h2>
        </div>
        <UBadge color="neutral" variant="subtle" :label="`${props.links.length} total`" />
      </div>
    </template>

    <div v-if="props.links.length === 0" class="py-12 text-center text-muted">
      <UIcon name="i-lucide-link-2-off" class="mx-auto mb-3 size-8" />
      <p>No links yet. Create your first short link above.</p>
    </div>

    <ul v-else class="divide-y divide-default/60">
      <li
        v-for="link in props.links"
        :key="link.id"
        class="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div class="min-w-0">
          <div class="flex items-center gap-2">
            <a
              :href="link.shortUrl"
              target="_blank"
              rel="noopener"
              class="font-medium text-primary hover:underline truncate"
            >
              {{ link.shortUrl.replace(/^https?:\/\//, "") }}
            </a>
            <UButton
              icon="i-lucide-copy"
              size="xs"
              variant="ghost"
              color="neutral"
              aria-label="Copy short link"
              @click="copy(link.shortUrl)"
            />
          </div>
          <p class="text-sm text-muted truncate">→ {{ link.target }}</p>
          <p class="text-xs text-dimmed mt-0.5">
            Created {{ dateFmt.format(new Date(link.createdAt)) }}
          </p>
        </div>

        <div class="flex items-center gap-3 shrink-0">
          <UBadge
            color="neutral"
            variant="soft"
            :label="`${link.clickCount} clicks`"
            icon="i-lucide-mouse-pointer-click"
          />
          <UButton
            icon="i-lucide-pencil"
            size="sm"
            variant="ghost"
            color="neutral"
            aria-label="Edit link"
            @click="openEdit(link)"
          />
          <UButton
            icon="i-lucide-trash-2"
            size="sm"
            variant="ghost"
            color="error"
            aria-label="Delete link"
            :loading="deletingSlug === link.slug"
            @click="remove(link)"
          />
        </div>
      </li>
    </ul>

    <UModal
      v-model:open="editOpen"
      title="Edit destination"
      :description="editing ? `Update where /${editing.slug} points.` : ''"
      :ui="{ footer: 'justify-end' }"
    >
      <template #body>
        <UForm
          id="edit-link-form"
          :schema="editSchema"
          :state="editState"
          class="space-y-4"
          @submit="onEdit"
        >
          <UFormField name="target" label="Destination URL" required>
            <UInput v-model="editState.target" class="w-full" />
          </UFormField>
        </UForm>
      </template>
      <template #footer="{ close }">
        <UButton label="Cancel" color="neutral" variant="outline" @click="close" />
        <UButton
          type="submit"
          form="edit-link-form"
          label="Save"
          :loading="editLoading"
        />
      </template>
    </UModal>
  </UCard>
</template>
