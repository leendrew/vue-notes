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
  --bg-color: var(--color-green-light);
  --text-color: var(--color-white);

  height: fit-content;
  background-color: var(--bg-color);
  color: var(--text-color);
  border-radius: 12px;
  box-shadow: 0px 15px 15px -10px rgba(0, 0, 0, 0.4);
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
