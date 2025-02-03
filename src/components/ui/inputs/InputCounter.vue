<script setup lang="ts">
import { computed } from 'vue';
import AppTypography from '@/components/ui/AppTypography.vue';

export interface InputCounterProps {
  value: number;
  maxValue?: number | null;
}

const { value, maxValue = null } = defineProps<InputCounterProps>();
const text = computed<string>(() => `${value}${maxValue ? `/${maxValue}` : ''}`);
</script>

<template>
  <AppTypography
    class="counter"
    variant="small"
    v-bind="$attrs"
  >
    {{ text }}
  </AppTypography>
</template>

<style scoped>
.counter {
  color: var(--color-gray);
}
</style>
