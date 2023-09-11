<script setup>
// import useAuth from "@/hooks/useAuth"
// const { isAuth, logout } = useAuth()
import { useAuthStore } from "@/stores/AuthStore.js"
const authStore = useAuthStore()
</script>

<template>
  <nav class="menu">
    <router-link
      v-if="!authStore.isAuth"
      to="/login"
      :class="{ active: $route.path === '/login' }"
      >login</router-link
    >

    <template v-else>
      <router-link to="/" :class="{ active: $route.path === '/' }"
        >main</router-link
      >
      <router-link to="/profile" :class="{ active: $route.path === '/profile' }"
        >profile</router-link
      >
      <router-link to="/ticket" :class="{ active: $route.path === '/ticket' }"
        >ticket</router-link
      >
      <a href="javascript:void(0);" @click="authStore.logout">logout</a>
    </template>
  </nav>
</template>

<style scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.menu a {
  font-size: 18px;
  color: #bbb;
  font-weight: 700;
}
.menu a:hover {
  opacity: 0.8;
}
.menu a:not(:first-child) {
  margin-left: 15px;
}
.menu a.active {
  color: var(--color_red);
}
</style>
