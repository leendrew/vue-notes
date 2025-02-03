<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore, useAuthStore } from '@/store';
import AppTypography from '@/components/ui/AppTypography.vue';
import { routeConfig } from '@/config';
import PlaceholderProfileImage from '@/assets/images/placeholder-profile.svg';

const router = useRouter();
const userStore = useUserStore();
const authStore = useAuthStore();

const isDropdownShow = ref<boolean>(false);

const onProfileImageClick = () => {
  isDropdownShow.value = !isDropdownShow.value;
};

const onLogoutClick = async () => {
  try {
    await authStore.logout();

    router.push({ name: routeConfig.home.name });
  } catch (e) {}
};
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
      <template v-if="isDropdownShow">
        <div class="info__dropdown">
          <AppTypography
            class="link"
            variant="small-bold"
            @click="onLogoutClick"
          >
            Выйти
          </AppTypography>
        </div>
      </template>
    </template>
    <div>
      <img
        class="info__image"
        alt="User profile placeholder image."
        :src="PlaceholderProfileImage"
        @click="onProfileImageClick"
      />
    </div>
  </div>
</template>

<style scoped>
.info {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
}

.info__image {
  cursor: pointer;
}

.info__dropdown {
  --dropdown-padding: 20px;

  position: absolute;
  right: 0;
  top: calc(100% + 22px);
  padding: var(--dropdown-padding);
  background-color: var(--color-dark-middle);
  border-radius: 12px;
  box-shadow: 0px 15px 46px -10px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
}

.info__name {
  max-width: 215px;
  text-overflow: ellipsis;
  overflow: hidden;
}

@media screen and (min-width: 576px) {
  .info__dropdown {
    --dropdown-padding: 40px;
  }
}
</style>
