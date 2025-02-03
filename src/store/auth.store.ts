import { ref } from 'vue';
import { defineStore, acceptHMRUpdate } from 'pinia';
import { useUserStore } from './user.store';
import { authService } from '@/api';
import type { LoginRequestDto } from '@/api';

export const useAuthStore = defineStore('auth', () => {
  const isAuth = ref<boolean>(false);
  const accessToken = ref<string>(localStorage.getItem('accessToken') || '');

  const login = async (payload: LoginRequestDto) => {
    try {
      const response = await authService.login(payload);

      const { accessToken: token } = response.data;
      isAuth.value = true;
      accessToken.value = token;
      localStorage.setItem('accessToken', token);

      await getMyself();

      return response;
    } catch (e) {
      throw e;
    }
  };

  const logout = async () => {
    try {
      const response = await authService.logout();

      const userStore = useUserStore();

      isAuth.value = false;
      accessToken.value = '';
      localStorage.removeItem('accessToken');
      userStore.setUser(null);

      return response;
    } catch (e) {
      throw e;
    }
  };

  const getMyself = async () => {
    try {
      const response = await authService.getMyself();

      const userStore = useUserStore();

      isAuth.value = true;
      userStore.setUser(response.data);

      return response;
    } catch (e) {
      throw e;
    }
  };

  return {
    isAuth,
    accessToken,
    login,
    logout,
    getMyself,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
