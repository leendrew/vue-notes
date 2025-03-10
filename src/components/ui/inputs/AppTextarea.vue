<script setup lang="ts">
import { computed } from 'vue';
import InputLabel, { type InputLabelProps } from './InputLabel.vue';
import InputError, { type InputErrorProps } from './InputError.vue';
import InputCounter, { type InputCounterProps } from './InputCounter.vue';

interface AppInputProps {
  modelValue: string;
  label?: InputLabelProps['text'];
  errors?: InputErrorProps['text'][];
  counterValue?: InputCounterProps['value'] | null;
  counterMaxValue?: InputCounterProps['maxValue'] | null;
}

const {
  modelValue,
  label = '',
  errors = [],
  counterValue = null,
  counterMaxValue = null,
} = defineProps<AppInputProps>();
const emit = defineEmits(['update:modelValue']);

const inputValue = computed<string>({
  get() {
    return modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

const firstError = computed<string>(() => errors[0]);
const hasCounter = computed<boolean>(() => counterValue !== null);
</script>

<template>
  <div class="wrapper">
    <template v-if="label">
      <InputLabel
        class="wrapper__label"
        :text="label"
      />
    </template>
    <label class="wrapper__input input">
      <textarea
        v-model="inputValue"
        class="native-input"
        :rows="4"
        v-bind="$attrs"
      />
    </label>
    <template v-if="firstError || hasCounter">
      <div class="wrapper__footer footer">
        <template v-if="firstError">
          <InputError
            class="footer__error"
            :text="firstError"
          />
        </template>
        <template v-if="hasCounter">
          <InputCounter
            class="footer__counter"
            :value="counterValue!"
            :max-value="counterMaxValue!"
          />
        </template>
      </div>
    </template>
  </div>
</template>

<style scoped>
.wrapper {
  --padding-inline: 24px;

  display: flex;
  flex-direction: column;
  gap: 8px;
}

.wrapper__label {
  padding-inline: var(--padding-inline);
}

.wrapper__footer {
  padding-inline: var(--padding-inline);
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

.footer__counter {
  margin-left: auto;
}

.wrapper__input {
  --input-wrapper-border-color: transparent;
  --input-wrapper-padding-inline: 16px;

  cursor: text;
  padding-inline: 28px;
  padding-block: var(--input-wrapper-padding-inline);
  background-color: var(--color-white);
  border-radius: 36px;
  border-width: 2px;
  border-style: solid;
  border-color: var(--input-wrapper-border-color);
}

.wrapper__input:has(.native-input:hover, .native-input:focus-visible) {
  --input-wrapper-border-color: var(--color-green-light);
}

.native-input {
  resize: none;
}
</style>
