<template>
  <!-- <input :value="modelValue" @input="updateInput" type="text" class="input" /> -->
  <textarea :value="modelValue" @input="updateInput" cols="30" rows="10" class="textarea"></textarea>
</template>

<script>
export default {
  name: "MyTextarea",
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
.textarea {
  display: block;
  width: 100%;
  min-height: 50px;
  height: 50px;
  max-height: 150px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid var(--done);
}
</style>