<script setup lang="ts">
import { ref } from 'vue';
import AppButton from '@/components/ui/AppButton.vue';
import AppTypography from '@/components/ui/AppTypography.vue';
import LoginIcon from '@/components/icons/LoginIcon.vue';
import AuthModal from './AuthModal.vue';

const isAuthModalShow = ref<boolean>(false);

const onLoginClick = () => {
  isAuthModalShow.value = true;
};
</script>

<template>
  <AppButton @click="onLoginClick">
    <LoginIcon />
    <AppTypography>Вход</AppTypography>
  </AppButton>
  <template v-if="isAuthModalShow">
    <AuthModal v-model="isAuthModalShow" />
  </template>
</template>
