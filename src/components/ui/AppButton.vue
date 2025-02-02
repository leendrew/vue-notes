<script setup lang="ts">
interface AppButtonProps {
  icon?: boolean;
}

const { icon = false } = defineProps<AppButtonProps>();
</script>

<template>
  <button
    class="button"
    :class="{
      icon,
    }"
    type="button"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<style scoped>
.button {
  --btn-size: 56px;
  --btn-bg-color: var(--color-green-light);
  --btn-padding-inline: 24px;

  height: var(--btn-size);
  padding-inline: var(--btn-padding-inline);
  background-color: var(--btn-bg-color);
  color: var(--color-white);
  border: 0px solid transparent;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.button:hover {
  --btn-bg-color: var(--color-green-middle);
}

.button:active {
  --btn-bg-color: var(--color-green-dark);
}

.button:disabled {
  --btn-bg-color: var(--color-gray);
}

.button.icon {
  --btn-padding-inline: 0;

  width: var(--btn-size);
}
</style>
