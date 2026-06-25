import { computed, shallowRef } from "vue";
import type { User } from "~/types/user";

export function useUsers() {
  const searchQuery = shallowRef("");

  const { data, status, error, refresh } = useFetch<User[]>("/api/users", {
    query: { q: searchQuery },
  });

  const users = computed(() => data.value ?? []);
  const isLoading = computed(() => status.value === "pending");

  return {
    searchQuery,
    users,
    isLoading,
    error,
    refresh,
  };
}
