<script setup lang="ts">
import { useAuthStore } from '@/store';
import AppContainer from '@/components/ui/AppContainer.vue';
import LoginButton from '@/components/auth/LoginButton.vue';
import ProfileInfo from '@/components/auth/ProfileInfo.vue';
import LogoImage from '@/assets/images/logo.svg';
import LogoSlimImage from '@/assets/images/logo-slim.svg';
import { routeConfig } from '@/config';

const authStore = useAuthStore();

const isMobile = window.matchMedia('(max-width: 576px)').matches;
</script>

<template>
  <header class="header">
    <AppContainer class="header__inner">
      <RouterLink :to="{ name: routeConfig.home.name }">
        <img
          :src="isMobile ? LogoSlimImage : LogoImage"
          alt="MyNotes site logo."
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
