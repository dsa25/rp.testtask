import { createRouter, createWebHistory } from "vue-router"

import  useAuth  from "@/hooks/useAuth"

import Main from "@/pages/Main.vue"
import Profile from "@/pages/Profile.vue"
import Ticket from "@/pages/Ticket.vue"
import Login from "@/pages/Login.vue"

const routes = [
  {
    path: "/",
    name: "main",
    component: Main
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/ticket",
    name: "ticket",
    component: Ticket
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// redirect to login page 
router.beforeEach(async (to) => {
  const publicPages = ["/login"]
  const pageIsPublic = publicPages.includes(to.path)
  const { isAuth } = useAuth()
  if (to.path === '/login' && isAuth.value) {
    console.log("redirect /main")
    return { name: "main" }
  } 
  else if (!pageIsPublic && !isAuth.value) {
    console.log("redirect /login")
    return { name: "login" }
  }
})

export default router
