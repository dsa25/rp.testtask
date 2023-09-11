<script setup>
import TableTickets from "@/components/TableTickets.vue"
import FormAddTicket from "@/components/FormAddTicket.vue"

// composable ..
// import useTickets from "@/hooks/useTickets"
// const { addTicket, tickets } = useTickets()

import { useTicketStore } from "@/stores/TicketStore.js"
const ticketStore = useTicketStore()

const newTicket = (form) => {
  console.log({ form })
  if (form.header.trim().length === 0 || form.text.trim().length === 0) {
    return alert("Не все поля заполнены!")
  }
  ticketStore.addTicket(form)
}
</script>

<template>
  <section class="page__content">
    <div class="row">
      <div class="page__head">
        <h1>Ticket page</h1>
      </div>

      <FormAddTicket @createTicket="newTicket" />

      <TableTickets :tickets="ticketStore.tickets" />
    </div>
  </section>
</template>

<style>
.tbl {
  @apply w-full text-center divide-y divide-gray-300 border-b border-gray-200 shadow;
}
.tbl th,
.tbl td {
  @apply px-6 py-2;
}
.tbl th {
  @apply text-gray-500 bg-gray-50;
}
.tbl td {
  @apply text-gray-600;
}
.tbl tr:nth-child(2n + 1) {
  background-color: #f7fff7a1;
}
</style>
