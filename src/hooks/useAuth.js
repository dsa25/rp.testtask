import { useRouter } from "vue-router"
import { ref, reactive } from "vue";


let isAuth = ref(false)
let user = reactive({})

export default function useAuth() {
    const router = useRouter()

    const checkAuth = () => {
        let myCookie = document.cookie.indexOf("sessionId")
        console.log("sessionId: ", myCookie)
        if (localStorage?.user) {
            user = JSON.parse(localStorage?.user)
        }
        console.log('uv123: ', user)
        if (myCookie > -1 && Object.keys(user).length) {
          isAuth.value = true
        }
    }

    const login = async (data) => {
        let userLS = {}
        if(localStorage?.user){
            userLS = JSON.parse(localStorage?.user)
            console.log({ userLS })
            userLS.login = data.login
            localStorage.user = JSON.stringify(userLS)
        }
        else{
            userLS = {
              login: data.login,
              email: "ivanov2001@mail.ru",
              name: "Ivan",
              surname: "Ivanov",
              dob: "2001-01-01",
              city: 28
            }
            localStorage.user = JSON.stringify(userLS)
        }
        user = userLS
        isAuth.value = true
        console.log("login user: ", user)
        router.push({name: 'main'})
        document.cookie = "sessionId=id; max-age=333"
    }
    
    const logout = () => {
        isAuth.value = false
        router.push({name: 'login'})
        document.cookie = "sessionId=''; max-age=-1"
     }

    const updateUser = () => {
        localStorage.user = JSON.stringify(user)
    }
    
    return { isAuth, login, logout, checkAuth, updateUser, user }
}