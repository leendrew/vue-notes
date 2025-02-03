<script setup lang="ts">
import { ref, computed, reactive } from 'vue';
import AppModal from '@/components/ui/AppModal.vue';
import AppInput from '@/components/ui/inputs/AppInput.vue';
import AppTextarea from '@/components/ui/inputs/AppTextarea.vue';
import AppTypography from '@/components/ui/AppTypography.vue';
import AppButton from '@/components/ui/AppButton.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';
import { notesService } from '@/api';
import type { CreateNoteRequestDto, ApiResponseFailData, ApiResponseFail } from '@/api';

type CreateNoteFormData = CreateNoteRequestDto;

interface AddNoteModalProps {
  modelValue: boolean;
}

const { modelValue } = defineProps<AddNoteModalProps>();
const emit = defineEmits(['update:modelValue', 'add:note']);

const isModalOpen = computed<boolean>({
  get() {
    return modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

const form = reactive<CreateNoteFormData>({
  title: '',
  content: '',
});

const errorMessage = ref<ApiResponseFailData['message']>('');

const onSubmit = async () => {
  try {
    const response = await notesService.createOne(form);
    emit('add:note', response.data);
    isModalOpen.value = false;
  } catch (e) {
    errorMessage.value = (e as ApiResponseFail).response!.data.message;
  }
};
</script>

<template>
  <AppModal
    v-model="isModalOpen"
    title="Добавление заметки"
  >
    <form
      class="form"
      @submit.prevent="onSubmit"
    >
      <AppInput
        v-model="form.title"
        placeholder="Введите название"
        :counter-value="form.title.length"
        :counter-max-value="100"
      />
      <AppTextarea
        v-model="form.content"
        placeholder="Введите текст"
        :counter-value="form.content.length"
        :counter-max-value="500"
      />
      <AppButton
        class="form__action"
        type="submit"
      >
        <AppTypography>Добавить</AppTypography>
      </AppButton>
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
  </AppModal>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form__action {
  --form-action-button-align-self: stretch;

  align-self: var(--form-action-button-align-self);
}

.errors {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@media screen and (min-width: 576px) {
  .form__action {
    --form-action-button-align-self: flex-end;
  }

  .actions__navigation {
    --actions-navigation-align-self: normal;
  }
}
</style>
