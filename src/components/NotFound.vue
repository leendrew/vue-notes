<script setup lang="ts">
import AppContainer from '@/components/ui/AppContainer.vue';
import AppTypography from '@/components/ui/AppTypography.vue';
import AppLink from '@/components/ui/AppLink.vue';
import { routeConfig } from '@/config';
</script>

<template>
  <section class="error">
    <AppContainer class="error_inner">
      <AppTypography
        is="h1"
        variant="h2"
      >
        Ошибка 404. Страница не найдена
      </AppTypography>
      <AppLink :to="{ name: routeConfig.home.name }">
        <AppTypography> Вернуться на главную </AppTypography>
      </AppLink>
    </AppContainer>
  </section>
</template>

<style scoped>
.error_inner {
  padding-block: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
