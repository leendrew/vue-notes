import { ref } from 'vue';
import { defineStore, acceptHMRUpdate } from 'pinia';
import type { User } from '@/api';

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null);

  const setUser = (newUser: User | null) => {
    user.value = newUser;
  };

  return {
    user,
    setUser,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
