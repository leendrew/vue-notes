<script setup lang="ts">
import AppContainer from '@/components/ui/AppContainer.vue';
import LoginButton from '@/components/auth/LoginButton.vue';
import ProfileInfo from '@/components/auth/ProfileInfo.vue';
import { useAuthStore } from '@/store';
import LogoImage from '@/assets/images/logo.svg';
import LogoSlimImage from '@/assets/images/logo-slim.svg';
import { routeConfig } from '@/config';

const authStore = useAuthStore();
</script>

<template>
  <header class="header">
    <AppContainer class="header__inner">
      <RouterLink :to="{ name: routeConfig.home.name }">
        <img
          :src="LogoImage"
          alt="MyNotes logo."
        />
      </RouterLink>
      <slot />
      <template v-if="authStore.isAuth">
        <ProfileInfo />
      </template>
      <template v-else>
        <LoginButton />
      </template>
    </AppContainer>
  </header>
</template>

<style scoped>
.header {
  --header-padding-block: 20px;

  padding-block: var(--header-padding-block);
}

.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (min-width: 1408px) {
  .header {
    --header-padding-block: 40px;
  }
}
</style>
