<script setup lang="ts">
import { ref, computed } from 'vue';
import AppInput from './AppInput.vue';
import EyeOnIcon from '@/components/icons/EyeOnIcon.vue';
import EyeOffIcon from '@/components/icons/EyeOffIcon.vue';

type InputType = 'password' | 'email';

interface PasswordInputProps {
  modelValue: string;
  mode?: InputType;
}

const { modelValue, mode = 'password' } = defineProps<PasswordInputProps>();
const emit = defineEmits(['update:modelValue']);

const inputValue = computed({
  get() {
    return modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

const inputType = ref<InputType>(mode);

const inputTypeMap = {
  password: {
    type: 'password',
    icon: EyeOnIcon,
    title: 'Показать пароль',
  },
  email: {
    type: 'text',
    icon: EyeOffIcon,
    title: 'Скрыть пароль',
  },
};

const currentInputType = computed(() => inputTypeMap[inputType.value]);

const toggleInputType = () => {
  if (inputType.value === 'password') {
    inputType.value = 'email';
    return;
  }

  inputType.value = 'password';
};
</script>

<template>
  <AppInput
    v-model="inputValue"
    label="Пароль"
    :type="currentInputType.type"
    v-bind="$attrs"
  >
    <template #append-inner>
      <component
        class="icon"
        :is="currentInputType.icon"
        :title="currentInputType.title"
        @click.stop="toggleInputType"
      />
    </template>
  </AppInput>
</template>

<style scoped>
.icon {
  cursor: pointer;
}
</style>
