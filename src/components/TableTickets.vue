<script setup>
const props = defineProps({
  tickets: {
    type: Object,
    required: true,
    default: () => {}
  }
})
</script>

<template>
  <table class="tbl mb-3">
    <tr>
      <th>id</th>
      <th>заголовок</th>
      <th>описание</th>
    </tr>
    <tr v-for="(item, index) in tickets" :data-id="item.id" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.header }}</td>
      <td>{{ item.text }}</td>
    </tr>
  </table>
</template>

<style scoped></style>
