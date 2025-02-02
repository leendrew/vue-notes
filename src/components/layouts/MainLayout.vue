<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
</script>

<template>
  <AppHeader />
  <main class="main">
    <slot />
  </main>
</template>

<style scoped>
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
