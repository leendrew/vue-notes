<script setup lang="ts">
import type { Component } from 'vue';

interface TypographyProps {
  is?: string | Component;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body'
    | 'small'
    | 'small-bold'
    | 'h1-mobile'
    | 'h2-mobile'
    | 'h3-mobile'
    | 'h4-mobile'
    | 'body-mobile'
    | 'small-mobile'
    | 'small-bold-mobile';
}

const { is = 'span', variant = 'body' } = defineProps<TypographyProps>();

// TODO: автозамену variant на variant--mobile и наоборот в зависимости от брейкпоинта
</script>

<template>
  <component
    :class="variant"
    :is="is"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<style scoped>
.h1 {
  font-size: var(--font-size-h1);
  line-height: var(--line-height-h1);
  font-weight: var(--font-weight-black);
}

.h2 {
  font-size: var(--font-size-h2);
  line-height: var(--line-height-h2);
  font-weight: var(--font-weight-semibold);
}

.h3 {
  font-size: var(--font-size-h3);
  line-height: var(--line-height-h3);
  font-weight: var(--font-weight-normal);
}

.h4 {
  font-size: var(--font-size-h4);
  line-height: var(--line-height-h4);
  font-weight: var(--font-weight-semibold);
}

.body {
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  font-weight: var(--font-weight-medium);
}

.small {
  font-size: var(--font-size-small);
  line-height: var(--line-height-small);
  font-weight: var(--font-weight-normal);
}

.small-bold {
  font-size: var(--font-size-small-bold);
  line-height: var(--line-height-small-bold);
  font-weight: var(--font-weight-bold);
}

.h1-mobile {
  font-size: var(--font-size-h1-mobile);
  line-height: var(--line-height-h1-mobile);
  font-weight: var(--font-weight-black);
}

.h2-mobile {
  font-size: var(--font-size-h2-mobile);
  line-height: var(--line-height-h2-mobile);
  font-weight: var(--font-weight-semibold);
}

.h3-mobile {
  font-size: var(--font-size-h3-mobile);
  line-height: var(--line-height-h3-mobile);
  font-weight: var(--font-weight-normal);
}

.h4-mobile {
  font-size: var(--font-size-h4-mobile);
  line-height: var(--line-height-h4-mobile);
  font-weight: var(--font-weight-semibold);
}

.body-mobile {
  font-size: var(--font-size-body-mobile);
  line-height: var(--line-height-body-mobile);
  font-weight: var(--font-weight-medium);
}

.small-mobile {
  font-size: var(--font-size-small-mobile);
  line-height: var(--line-height-small-mobile);
  font-weight: var(--font-weight-normal);
}

.small-bold-mobile {
  font-size: var(--font-size-small-bold-mobile);
  line-height: var(--line-height-small-bold-mobile);
  font-weight: var(--font-weight-bold);
}
</style>
