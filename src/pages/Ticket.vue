<script setup>
    import { reactive } from "vue"

    import useTickets from "@/hooks/useTickets";
    const { tickets, addTicket } = useTickets()
    const formTicket = reactive({
        header: '',
        text: ''
    })
    const newTicket = () => {
        if(formTicket.header.trim().length === 0 || formTicket.text.trim().length === 0){
           return alert("Не все поля заполнены!")
        }
        addTicket(formTicket)
        formTicket.header = ''
        formTicket.text = ''
    }
</script>

<template>
    <section class="page__content">
        <div class="row">
            <div class="page__head">
                <h1>Ticket page</h1>
            </div>

            <form class="formTicket max-w-md mx-auto mb-7" @submit.prevent>
                <MyInput v-model="formTicket.header" class="mb-3" placeholder="Заголовок тикета"/>
                <MyTextarea v-model="formTicket.text" class="mb-3" placeholder="Описание"/>
                <MyBtn class="btn__success block ml-auto" @click="newTicket">add ticket</MyBtn>
            </form>
            
            <table class="tbl mb-3" >
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