<script setup lang="ts">
import { ref, computed } from 'vue';
import AppModal from '@/components/ui/AppModal.vue';
import LoginForm from './LoginForm.vue';
import RegisterForm from './RegisterForm.vue';

type FormType = 'login' | 'register';

interface AuthModalProps {
  modelValue: boolean;
}

const { modelValue } = defineProps<AuthModalProps>();
const emit = defineEmits(['update:modelValue']);

const isModalOpen = computed<boolean>({
  get() {
    return modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

const formType = ref<FormType>('login');

const formTypeMap = {
  login: {
    is: LoginForm,
    title: 'Вход в ваш аккаунт',
  },
  register: {
    is: RegisterForm,
    title: 'Регистрация',
  },
};

const currentFormType = computed(() => formTypeMap[formType.value]);

const onToggleFormType = () => {
  if (formType.value === 'login') {
    formType.value = 'register';
    return;
  }

  formType.value = 'login';
};
</script>

<template>
  <AppModal
    v-model="isModalOpen"
    :title="currentFormType.title"
  >
    <component
      :is="currentFormType.is"
      @toggle:form-type="onToggleFormType"
    />
  </AppModal>
</template>
