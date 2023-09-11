<script setup>
import { reactive } from "vue"
const emit = defineEmits(["createTicket"])
const formTicket = reactive({
  header: "",
  text: ""
})
const newTicket = () => {
  console.log("click..")
  emit("createTicket", formTicket)
  formTicket.header = ""
  formTicket.text = ""
}
</script>

<template>
  <form class="formTicket max-w-md mx-auto mb-7" @submit.prevent>
    <MyInput
      v-model="formTicket.header"
      class="mb-3"
      placeholder="Заголовок тикета"
    />
    <MyTextarea v-model="formTicket.text" class="mb-3" placeholder="Описание" />
    <MyBtn class="btn__success block ml-auto" @click="newTicket"
      >add ticket</MyBtn
    >
  </form>
</template>

<style scoped></style>
