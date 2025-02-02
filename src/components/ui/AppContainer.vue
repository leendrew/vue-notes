<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  --padding-inline: 10px;
  --max-width: 100%;

  margin-inline: auto;
  padding-inline: var(--padding-inline);
  width: 100%;
  max-width: var(--max-width);
}

@media screen and (min-width: 576px) {
  .container {
    --padding-inline: 20px;
    --max-width: 576px;
  }
}

@media screen and (min-width: 768px) {
  .container {
    --max-width: 768px;
  }
}

@media screen and (min-width: 992px) {
  .container {
    --max-width: 992px;
  }
}

@media screen and (min-width: 1200px) {
  .container {
    --max-width: 1200px;
  }
}

@media screen and (min-width: 1408px) {
  .container {
    --max-width: 1600px;
  }
}
</style>
