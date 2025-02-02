import { ref } from 'vue';
import { defineStore, acceptHMRUpdate } from 'pinia';
import { useUserStore } from './user.store';
import { authService } from '@/api';
import type { LoginRequestDto } from '@/api';
import { HTTP_STATUS_CODE } from '@/constants';

export const useAuthStore = defineStore('auth', () => {
  const isAuth = ref<boolean>(false);
  const accessToken = ref<string>(localStorage.getItem('accessToken') || '');

  const login = async (payload: LoginRequestDto) => {
    const response = await authService.login(payload);
    if (response.status !== HTTP_STATUS_CODE.ok) {
      return;
    }

    const { accessToken: token } = response.data;
    isAuth.value = true;
    accessToken.value = token;
    localStorage.setItem('accessToken', token);
  };

  const logout = async () => {
    const response = await authService.logout();
    if (response.status !== HTTP_STATUS_CODE.ok) {
      return;
    }

    const userStore = useUserStore();

    isAuth.value = false;
    accessToken.value = '';
    localStorage.removeItem('accessToken');
    userStore.setUser(null);
  };

  return {
    isAuth,
    accessToken,
    login,
    logout,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
