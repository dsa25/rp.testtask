<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input" />
</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value)
    },
  },
}
</script>

<style scoped>
.input {
  display: block;
  width: 100%;
  height: var(--heightField);
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid var(--done);
}
</style>