<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AppContainer from '@/components/ui/AppContainer.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';
import NoteCard from './NoteCard.vue';
import AddNoteButton from './AddNoteButton.vue';
import { notesService } from '@/api';
import type { ApiResponseFailData, ApiResponseFail } from '@/api';
import type { Note } from '@/api';

const isLoading = ref<boolean>(false);
const errorMessage = ref<ApiResponseFailData['message']>('');
const notes = ref<Note[]>([]);

onMounted(() => {
  getNotes();
});

const getNotes = async () => {
  try {
    isLoading.value = true;

    const response = await notesService.getAll();

    notes.value = response.data;
  } catch (e) {
    errorMessage.value = (e as ApiResponseFail).response!.data.message;
  } finally {
    isLoading.value = false;
  }
};

const onDeleteNote = async (noteId: Note['id']) => {
  try {
    await notesService.deleteOneById(noteId);
    notes.value = notes.value.filter(({ id }) => id !== noteId);
  } catch (e) {
    errorMessage.value = (e as ApiResponseFail).response!.data.message;
  }
};

const onAddNote = (note: Note) => {
  notes.value.push(note);
};
</script>

<template>
  <section class="notes">
    <AppContainer class="notes__inner">
      <template v-if="isLoading">
        <div class="notes__text">Загрузка...</div>
      </template>
      <template v-else-if="notes.length">
        <div class="notes__list">
          <template v-if="notes.length">
            <NoteCard
              v-for="note in notes"
              :key="note.id"
              :title="note.title"
              :content="note.content"
              @click:delete="onDeleteNote(note.id)"
            />
          </template>
        </div>
      </template>
      <AddNoteButton
        class="notes__add-button"
        @add:note="onAddNote"
      />
      <template v-if="errorMessage">
        <div class="notes__text errors">
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
    </AppContainer>
  </section>
</template>

<style scoped>
.notes {
  --notes-list-padding-block: 20px;

  padding-block: var(--notes-list-padding-block);
}

.notes__inner {
  display: flex;
  flex-direction: column;
}

.notes__text {
  align-self: center;
}

.notes__list {
  --notes-list-grid-columns: 1;
  --notes-list-grid-gap: 20px;

  display: grid;
  grid-template-columns: repeat(var(--notes-list-grid-columns), minmax(0, 1fr));
  grid-gap: var(--notes-list-grid-gap);
}

.notes__add-button {
  --add-button-right: 8px;

  position: absolute;
  right: var(--add-button-right);
  bottom: 40px;
}

.errors {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@media screen and (min-width: 576px) {
  .notes {
    --notes-list-padding-block: 40px;
  }
}

@media screen and (min-width: 768px) {
  .notes__list {
    --notes-list-grid-columns: 2;
  }

  .notes__add-button {
    --add-button-right: 12px;
  }
}

@media screen and (min-width: 992px) {
  .notes__list {
    --notes-list-grid-gap: 40px;
  }
}

@media screen and (min-width: 1200px) {
  .notes__list {
    --notes-list-grid-columns: 3;
  }

  .notes__add-button {
    --add-button-right: 40px;
  }
}
</style>
