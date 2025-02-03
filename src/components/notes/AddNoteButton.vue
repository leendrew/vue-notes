<script setup lang="ts">
import { ref } from 'vue';
import AppButton from '@/components/ui/AppButton.vue';
import AddNoteModal from './AddNoteModal.vue';
import PlusIcon from '@/components/icons/PlusIcon.vue';

const isAddNoteModalShow = ref<boolean>(false);

const onAddNoteClick = () => {
  isAddNoteModalShow.value = true;
};
</script>

<template>
  <AppButton
    class="button"
    icon
    @click="onAddNoteClick"
  >
    <PlusIcon />
    <template v-if="isAddNoteModalShow">
      <AddNoteModal
        v-model="isAddNoteModalShow"
        v-bind="$attrs"
      />
    </template>
  </AppButton>
</template>

<style scoped>
.button {
  box-shadow: 0px 15px 46px -10px rgba(0, 0, 0, 0.6);
}
</style>
