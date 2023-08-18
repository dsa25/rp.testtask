<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyBtn",
}
</script>

<style scoped>
.btn {
  @apply inline-block text-white py-0 px-4 rounded whitespace-nowrap;
  height: var(--heightField);
  text-align: center;
}
.btn:disabled, .btn:disabled:hover {
  background: #d1d1d1;
}
.btn_min {
  height: 25px;
  padding: 0 12px;
}
.btn.block {
  display: block;
}
.btn__success {
  @apply bg-green-500 hover:bg-green-400;
}
.btn__danger {
  @apply bg-red-500 hover:bg-red-400;
}
</style>