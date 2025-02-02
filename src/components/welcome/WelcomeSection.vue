<script setup lang="ts">
import AppContainer from '@/components/ui/AppContainer.vue';
import AppTypography from '@/components/ui/AppTypography.vue';
import MainImage from '@/assets/images/main.svg';
</script>

<template>
  <section class="welcome">
    <AppContainer class="welcome__inner">
      <div class="welcome__text text">
        <AppTypography
          class="text__heading"
          is="h1"
          variant="h1"
        >
          Мои заметки
        </AppTypography>
        <AppTypography
          class="text__description"
          is="h3"
          variant="h3"
        >
          Не забывай о важном, храни его в облаке.
        </AppTypography>
      </div>
      <div>
        <img
          role="presentation"
          :src="MainImage"
        />
      </div>
    </AppContainer>
  </section>
</template>

<style scoped>
.welcome__inner {
  --section-padding-top: 20px;
  --items-direction: column;

  padding-top: var(--section-padding-top);
  display: flex;
  flex-direction: var(--items-direction);
  align-items: center;
}

.welcome__text {
  --texts-gap: 20px;
  --texts-align: center;

  display: flex;
  flex-direction: column;
  gap: var(--texts-gap);
  text-align: var(--texts-align);
}

.text__description {
  color: var(--color-gray);
}

@media screen and (min-width: 768px) {
  .welcome__inner {
    --section-padding-top: 40px;
    --items-direction: row;
  }

  .welcome__text {
    --texts-gap: 40px;
    --texts-align: start;
  }
}

@media screen and (min-width: 1200px) {
  .welcome__inner {
    --section-padding-top: 0;
  }
}
</style>
