<script setup lang="ts">
import AppTypography from '@/components/ui/AppTypography.vue';
import { useUserStore } from '@/store';
import PlaceholderProfileImage from '@/assets/images/placeholder-profile.svg';

const userStore = useUserStore();
</script>

<template>
  <div class="info">
    <template v-if="userStore.user">
      <AppTypography
        class="info__name"
        variant="small"
      >
        {{ userStore.user.email }}
      </AppTypography>
    </template>
    <img
      alt="User profile placeholder image."
      :src="PlaceholderProfileImage"
    />
  </div>
</template>

<style scoped>
.info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.info__name {
  max-width: 215px;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
