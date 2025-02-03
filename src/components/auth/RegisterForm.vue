<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store';
import AppInput from '@/components/ui/inputs/AppInput.vue';
import PasswordInput from '@/components/ui/inputs/PasswordInput.vue';
import AppButton from '@/components/ui/AppButton.vue';
import AppTypography from '@/components/ui/AppTypography.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';
import { registerService } from '@/api';
import type { RegisterRequestDto, ApiResponseFailData, ApiResponseFail } from '@/api';
import { routeConfig } from '@/config';

const emit = defineEmits(['toggle:form-type']);

const router = useRouter();
const authStore = useAuthStore();

const form = reactive<RegisterRequestDto>({
  email: '',
  password: '',
  confirm_password: '',
});

const errorMessage = ref<ApiResponseFailData['message']>('');

const onToLoginClick = () => {
  emit('toggle:form-type');
};

const onSubmit = async () => {
  try {
    await registerService.register(form);
    await authStore.login({
      email: form.email,
      password: form.password,
    });

    router.push({ name: routeConfig.notes.name });
  } catch (e) {
    errorMessage.value = (e as ApiResponseFail).response!.data.message;
  }
};
</script>

<template>
  <form
    class="form"
    @submit.prevent="onSubmit"
  >
    <AppInput
      v-model="form.email"
      type="email"
      label="Email"
    />
    <PasswordInput v-model="form.password" />
    <PasswordInput
      v-model="form.confirm_password"
      label="Пароль еще раз"
    />
    <div class="form__actions actions">
      <span class="actions__navigation">
        <AppTypography variant="small">У вас есть аккаунт?</AppTypography>
        <AppTypography
          class="link"
          @click="onToLoginClick"
        >
          Войдите
        </AppTypography>
      </span>
      <AppButton type="submit">
        <AppTypography>Зарегистрироваться</AppTypography>
      </AppButton>
    </div>
  </form>
  <template v-if="errorMessage">
    <div class="errors">
      <template v-if="Array.isArray(errorMessage)">
        <ErrorMessage
          v-for="(message, index) in errorMessage"
          :key="index"
          :text="message"
        />
      </template>
      <template v-else>
        <ErrorMessage :text="errorMessage" />
      </template>
    </div>
  </template>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form__actions {
  --actions-direction: column-reverse;
  --actions-align: normal;

  display: flex;
  flex-direction: var(--actions-direction);
  align-items: var(--actions-align);
  gap: 40px;
}

.actions__navigation {
  --actions-navigation-align-self: center;

  display: inline-flex;
  align-items: center;
  align-self: var(--actions-navigation-align-self);
  gap: 4px;
  flex-grow: 1;
  flex-wrap: wrap;
}

.errors {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@media screen and (min-width: 576px) {
  .form__actions {
    --actions-direction: row;
    --actions-align: center;
  }

  .actions__navigation {
    --actions-navigation-align-self: normal;
  }
}
</style>
