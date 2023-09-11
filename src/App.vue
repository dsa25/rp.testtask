<script setup>
import { onMounted } from "vue"

import MyLogo from "@/components/MyLogo.vue"
import MyMenu from "@/components/MyMenu.vue"

//  composable ...
// import useAuth from "@/hooks/useAuth"
// import useTickets from "@/hooks/useTickets"
// const { checkAuth } = useAuth()
// const { getTickets, tickets } = useTickets()

import { useTicketStore } from "@/stores/TicketStore.js"
const ticketStore = useTicketStore()

import { useAuthStore } from "@/stores/AuthStore.js"
const authStore = useAuthStore()

onMounted(() => {
  authStore.checkAuth()
  ticketStore.getTickets()
  // checkAuth()
  // getTickets()
})
</script>

<template>
  <header>
    <div class="row">
      <MyLogo />
      <MyMenu />
    </div>
  </header>

  <router-view></router-view>

  <footer>
    <div class="row">
      <div class="copyright">© footer</div>
    </div>
  </footer>
</template>
