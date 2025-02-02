<script setup lang="ts">
import AppTypography from '@/components/ui/AppTypography.vue';

export interface InputErrorProps {
  text: string;
}

const { text } = defineProps<InputErrorProps>();
</script>

<template>
  <AppTypography
    class="text"
    variant="small"
    v-bind="$attrs"
  >
    {{ text }}
  </AppTypography>
</template>

<style scoped>
.text {
  color: var(--color-red);
}
</style>
