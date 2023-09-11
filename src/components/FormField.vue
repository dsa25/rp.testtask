<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
    default: () => {}
  },
  label: {
    type: String,
    required: true,
    default: () => {}
  }
})
</script>

<template>
  <div class="flex items-center justify-between mb-3">
    <label :for="id">{{ label }}: </label>
    <div class="w-2/3">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
