<script setup lang="ts">
import AppTypography from '@/components/ui/AppTypography.vue';

interface ErrorMessageProps {
  text: string;
}

const { text } = defineProps<ErrorMessageProps>();
</script>

<template>
  <div class="error">
    <AppTypography
      class="error__text"
      variant="small"
    >
      {{ text }}
    </AppTypography>
  </div>
</template>

<style scoped>
.error {
  padding-block: 8px;
  padding-inline: 20px;
  border-radius: 24px;
  background-color: rgba(255, 116, 97, 0.1);
}

.error__text {
  color: var(--color-red);
}
</style>
