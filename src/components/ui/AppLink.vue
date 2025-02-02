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

<style scoped>
.link {
  --link-color: var(--color-green-light);

  color: var(--link-color);
}

.link:hover {
  --link-color: var(--color--white);
}
</style>
