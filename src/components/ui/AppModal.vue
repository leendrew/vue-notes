<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue';
import AppOverlay from '@/components/ui/AppOverlay.vue';
import AppTypography from '@/components/ui/AppTypography.vue';
import AppButton from '@/components/ui/AppButton.vue';
import XMarkIcon from '@/components/icons/XMarkIcon.vue';

interface AppModalProps {
  modelValue: boolean;
  title?: string;
}

const { modelValue, title = '' } = defineProps<AppModalProps>();
const emit = defineEmits(['update:modelValue']);

const modalRef = ref<HTMLDivElement | null>(null);

const onOpen = () => {
  if (!modalRef.value) {
    return;
  }

  modalRef.value.focus();
};

const onClose = () => {
  emit('update:modelValue', false);
};

watch(
  () => modelValue,
  (value) => {
    if (!value) {
      return;
    }

    nextTick(() => {
      onOpen();
    });
  },
);

const trapFocus = (event: KeyboardEvent) => {
  if (!modalRef.value) {
    return;
  }

  const focusableElements = modalRef.value.querySelectorAll<HTMLElement>(
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled])',
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.key === 'Tab') {
    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      return;
    }

    if (document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }
};

onMounted(() => {
  document.addEventListener('keydown', trapFocus);
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', trapFocus);
});
</script>

<template>
  <Teleport to="#modal-root">
    <template v-if="modelValue">
      <div
        ref="modalRef"
        class="modal"
        :tabindex="-1"
      >
        <AppOverlay @click.self="onClose" />
        <div class="modal__inner">
          <header class="header">
            <template v-if="title">
              <AppTypography
                class="header__title"
                is="h2"
                variant="h2"
              >
                {{ title }}
              </AppTypography>
            </template>
            <AppButton
              class="header__close"
              icon
              @click="onClose"
            >
              <XMarkIcon />
            </AppButton>
          </header>
          <slot />
        </div>
      </div>
    </template>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

.modal__inner {
  --modal-inner-max-width: 100%;
  --modal-inner-padding: 16px;

  position: relative;
  background-color: var(--color-dark-middle);
  color: var(--color--white);
  padding: var(--modal-inner-padding);
  border-radius: 40px;
  z-index: 10;
  width: 100%;
  max-width: var(--modal-inner-max-width);
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.header {
  display: flex;
}

.header__title {
  --header-title-padding-right: 36px;

  flex-grow: 1;
  padding-right: var(--header-title-padding-right);
}

.header__close {
  --btn-close-top-offset: 12px;
  --btn-close-right-offset: 12px;

  position: absolute;
  top: var(--btn-close-top-offset);
  right: var(--btn-close-right-offset);
}

@media screen and (min-width: 576px) {
  .modal__inner {
    --modal-inner-max-width: 576px;
    --modal-inner-padding: 56px;
    --modal-inner-gap: 40px;
  }

  .header__title {
    --header-title-padding-right: 84px;
  }

  .header__close {
    --btn-close-top-offset: 20px;
    --btn-close-right-offset: 20px;
  }
}

@media screen and (min-width: 768px) {
  .modal__inner {
    --modal-inner-max-width: 768px;
    --modal-inner-padding: 56px;
  }

  .header__title {
    --header-title-padding-right: 84px;
  }
}

@media screen and (min-width: 1408px) {
  .modal__inner {
    --modal-inner-max-width: 780px;
    --modal-inner-padding: 80px;
  }

  .header__title {
    --header-title-padding-right: 108px;
  }
}
</style>
