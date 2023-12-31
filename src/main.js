import { createApp } from "vue"
import { createPinia } from "pinia"
import "./style.css"
import App from "./App.vue"
import router from "./router"
import components from "@/components/UI"

const app = createApp(App)

components.forEach((component) => {
  app.component(component.name, component)
})

app.use(createPinia()).use(router).mount("#app")
