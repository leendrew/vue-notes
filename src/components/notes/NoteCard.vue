<script setup lang="ts">
import AppTypography from '@/components/ui/AppTypography.vue';
import AppButton from '@/components/ui/AppButton.vue';
import XMarkIcon from '@/components/icons/XMarkIcon.vue';

interface NoteCardProps {
  title: string;
  content: string;
  hideActions?: boolean;
}

const { title, content, hideActions = false } = defineProps<NoteCardProps>();
const emit = defineEmits(['click:delete']);

const onDeleteClick = () => {
  emit('click:delete');
};
</script>

<template>
  <article class="note">
    <header class="note__header">
      <AppTypography
        is="h4"
        variant="h4"
      >
        {{ title }}
      </AppTypography>
    </header>
    <main class="note__content">
      <AppTypography is="p">
        {{ content }}
      </AppTypography>
    </main>
    <template v-if="!hideActions">
      <footer class="note__footer">
        <slot name="actions">
          <AppButton @click="onDeleteClick">
            <XMarkIcon />
            <AppTypography>Удалить</AppTypography>
          </AppButton>
        </slot>
      </footer>
    </template>
  </article>
</template>

<style scoped>
.note {
  --note-bg-color: var(--color-green-light);
  --note-text-color: var(--color-white);
  --note-border-radius: 12px;
  --note-corner-size: 40px;

  position: relative;
  height: fit-content;
  background-color: var(--note-bg-color);
  color: var(--note-text-color);
  border-radius: var(--note-border-radius);
  box-shadow: 0px 15px 15px -10px rgba(0, 0, 0, 0.4);
  clip-path: polygon(
    calc(100% - var(--note-corner-size)) 0,
    100% calc(0% + var(--note-corner-size)),
    100% 100%,
    0 100%,
    0 0
  );
}

.note::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: var(--note-corner-size);
  height: var(--note-corner-size);
  background-color: var(--color-green);
  border-bottom-left-radius: var(--note-border-radius);
  clip-path: polygon(0 0, 0 100%, 100% 100%);
}

.note__header {
  position: relative;
  padding-block: 20px;
  padding-inline: 28px;
  border-bottom: 1px solid var(--color-green-middle);
}

.note__content {
  padding-block: 20px;
  padding-inline: 28px;
}

.note__footer {
  padding: 8px;
  display: flex;
  justify-content: end;
}
</style>
