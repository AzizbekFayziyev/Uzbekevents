<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { useVModel } from '@vueuse/core';
import { cn } from '@/lib/utils';

const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes['class'];
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void;
}>();

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue
});
</script>

<template>
  <input
    v-model="modelValue"
    :class="
      cn(
        'flex  w-full rounded-md border border-input bg-transparent  py-1 text-sm  transition-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/[0.64] outline-none focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50',
        props.class
      )
    "
  />
</template>
