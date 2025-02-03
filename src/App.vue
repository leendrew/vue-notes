<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from './store';
import { routeConfig } from './config';

const router = useRouter();
const authStore = useAuthStore();

const bootstrap = async () => {
  await authStore.getMyself();
  if (!authStore.isAuth) {
    return;
  }

  router.push({ name: routeConfig.notes.name });
};

onMounted(() => {
  bootstrap();
});
</script>

<template>
  <RouterView />
</template>
