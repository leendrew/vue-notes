<script setup lang="ts">
import AppTypography from '@/components/ui/AppTypography.vue';

export interface InputLabelProps {
  text: string;
}

const { text } = defineProps<InputLabelProps>();
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
  color: var(--color-gray);
}
</style>
