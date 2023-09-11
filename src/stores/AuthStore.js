import { defineStore } from "pinia"
import { useRouter } from "vue-router"
import { ref } from "vue"

export const useAuthStore = defineStore("authStore", () => {
  const isAuth = ref(false)
  const user = ref({})
  const router = useRouter()

  const checkAuth = () => {
    let myCookie = document.cookie.indexOf("sessionId")
    console.log("sessionId: ", myCookie)
    if (localStorage?.user) {
      user.value = JSON.parse(localStorage?.user)
    }
    console.log("uv123: ", user)
    if (myCookie > -1 && Object.keys(user).length) {
      isAuth.value = true
    }
  }

  const login = async (data) => {
    let userLS = {}
    if (localStorage?.user) {
      userLS = JSON.parse(localStorage?.user)
      console.log({ userLS })
      userLS.login = data.login
      localStorage.user = JSON.stringify(userLS)
    } else {
      userLS = {
        login: data.login,
        email: "ivanov2001@mail.ru",
        firstName: "Ivan",
        lastName: "Ivanov",
        dob: "2001-01-01",
        city: 28
      }
      localStorage.user = JSON.stringify(userLS)
    }
    user.value = userLS
    isAuth.value = true
    console.log("login user: ", user)
    router.push({ name: "main" })
    document.cookie = "sessionId=id; max-age=333"
  }

  const logout = () => {
    isAuth.value = false
    router.push({ name: "login" })
    document.cookie = "sessionId=''; max-age=-1"
  }

  const updateUser = (data) => {
    localStorage.user = JSON.stringify(data)
  }

  return { isAuth, login, logout, checkAuth, updateUser, user }
})
