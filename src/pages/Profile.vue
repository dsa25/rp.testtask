<script setup>
import { ref, reactive, watch } from "vue"
// composable ..
// import useAuth from "@/hooks/useAuth"
// const { user, updateUser } = useAuth()

import { useAuthStore } from "@/stores/AuthStore.js"
const authStore = useAuthStore()

import FormField from "@/components/FormField.vue"

const btnDisable = ref(true)
const saveUser = () => {
  authStore.updateUser(authStore.user)
  btnDisable.value = true
}
const setCity = (e) => {
  authStore.user.city = +e
}
watch([authStore.user], () => {
  if (btnDisable.value) {
    btnDisable.value = false
    console.log("not disabled..")
  }
})
const listCities = [
  { value: 1, name: "Saint Petersburg" },
  { value: 2, name: "Novosibirsk" },
  { value: 3, name: "Yekaterinburg" },
  { value: 4, name: "Nizhniy Novgorod" },
  { value: 5, name: "Kazan" },
  { value: 6, name: "Chelyabinsk" },
  { value: 7, name: "Omsk" },
  { value: 8, name: "Samara" },
  { value: 9, name: "Rostov" },
  { value: 10, name: "Ufa" },
  { value: 11, name: "Krasnoyarsk" },
  { value: 12, name: "Voronezh" },
  { value: 13, name: "Perm" },
  { value: 14, name: "Volgograd" },
  { value: 15, name: "Krasnodar" },
  { value: 16, name: "Saratov" },
  { value: 17, name: "Tyumen" },
  { value: 18, name: "Tolyatti" },
  { value: 19, name: "Izhevsk" },
  { value: 20, name: "Barnaul" },
  { value: 21, name: "Ulyanovsk" },
  { value: 22, name: "Irkutsk" },
  { value: 23, name: "Khabarovsk" },
  { value: 24, name: "Yaroslavl" },
  { value: 25, name: "Vladivostok" },
  { value: 26, name: "Makhachkala" },
  { value: 27, name: "Tomsk" },
  { value: 28, name: "Orenburg" }
]
</script>

<template>
  <section class="page__content">
    <div class="row">
      <div class="page__head">
        <h1>Profile page</h1>
        <b class="text-blue-500">{{ authStore.user?.login }}</b>
      </div>
      <form class="formUser max-w-md" @submit.prevent>
        <FormField :id="'firstName'" :label="'Имя'">
          <MyInput id="firstName" v-model="authStore.user.firstName" />
        </FormField>
        <FormField :id="'lastName'" :label="'Фамилия'">
          <MyInput id="lastName" v-model="authStore.user.lastName" />
        </FormField>
        <FormField :id="'email'" :label="'Email'">
          <MyInput id="email" v-model="authStore.user.email" />
        </FormField>
        <FormField :id="'dob'" :label="'Дата рождения'">
          <MyInput type="date" id="dob" v-model="authStore.user.dob" />
        </FormField>
        <FormField :id="'city'" :label="'Город'">
          <MySelect
            :model-value="authStore.user.city"
            @update:model-value="setCity"
            :options="listCities"
            :id="'city'"
          />
        </FormField>
        <MyBtn
          @click="saveUser"
          class="btn__success block ml-auto"
          :disabled="btnDisable"
          >save</MyBtn
        >
      </form>
    </div>
  </section>
</template>
