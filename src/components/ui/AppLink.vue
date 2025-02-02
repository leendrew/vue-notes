<script setup lang="ts">
import type { RouterLinkProps } from 'vue-router';

interface AppLinkProps extends RouterLinkProps {}

const { to, ...rest } = defineProps<AppLinkProps>();
</script>

<template>
  <RouterLink
    class="link"
    :to="to"
    v-bind="{ ...rest, ...$attrs }"
  >
    <slot />
  </RouterLink>
</template>
