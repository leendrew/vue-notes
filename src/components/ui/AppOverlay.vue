<template>
  <div class="overlay">
    <slot />
  </div>
</template>

<style scoped>
.overlay {
  position: absolute;
  inset: 0;
  background-color: var(--color-dark);
  opacity: 0.7;
}
</style>
