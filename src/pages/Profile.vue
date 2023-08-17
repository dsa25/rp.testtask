<script setup>
    import useAuth from "@/hooks/useAuth";
    const { user, updateUser } = useAuth()
    const setCity = (e) => {
        user.city = +e
    }
    const  listCities = [
        {value: 1, name: "Saint Petersburg"},
        {value: 2, name: "Novosibirsk"},
        {value: 3, name: "Yekaterinburg"},
        {value: 4, name: "Nizhniy Novgorod"},
        {value: 5, name: "Kazan"},
        {value: 6, name: "Chelyabinsk"},
        {value: 7, name: "Omsk"},
        {value: 8, name: "Samara"},
        {value: 9, name: "Rostov"},
        {value: 10, name: "Ufa"},
        {value: 11, name: "Krasnoyarsk"},
        {value: 12, name: "Voronezh"},
        {value: 13, name: "Perm"},
        {value: 14, name: "Volgograd"},
        {value: 15, name: "Krasnodar"},
        {value: 16, name: "Saratov"},
        {value: 17, name: "Tyumen"},
        {value: 18, name: "Tolyatti"},
        {value: 19, name: "Izhevsk"},
        {value: 20, name: "Barnaul"},
        {value: 21, name: "Ulyanovsk"},
        {value: 22, name: "Irkutsk"},
        {value: 23, name: "Khabarovsk"},
        {value: 24, name: "Yaroslavl"},
        {value: 25, name: "Vladivostok"},
        {value: 26, name: "Makhachkala"},
        {value: 27, name: "Tomsk"},
        {value: 28, name: "Orenburg"}
      ]

</script>

<template>
    <section class="page__content">
        <div class="row">
        <div class="page__head">
            <h1>Profile page</h1>
            <b class="text-blue-500">{{user?.login}}</b>
        </div>

        <form class="formUser max-w-md" @submit.prevent>
            <div class="flex items-center justify-between mb-3">
                <label for="name">Имя: </label>
                <div class="w-2/3">
                    <MyInput id="name" v-model="user.name"/>
                </div>   
            </div>
            <div class="flex items-center justify-between mb-3">
                <label for="surname">Фамилия: </label>
                <div class="w-2/3">
                    <MyInput id="surname" v-model="user.surname"/>
                </div>   
            </div>
            <div class="flex items-center justify-between mb-3">
                <label for="email">Email: </label>
                <div class="w-2/3">
                    <MyInput id="email" v-model="user.email"/>
                </div>   
            </div>
            <div class="flex items-center justify-between mb-3">
                <label for="dob">Дата рождения: </label>
                <div class="w-2/3">
                    <MyInput type="date" id="dob" v-model="user.dob" />
                </div>   
            </div>
            <div class="flex items-center justify-between mb-3">
                <label for="city">Дата рождения: </label>
                <div class="w-2/3">
                    <MySelect :model-value="user.city" @update:model-value="setCity" :options="listCities" />
                </div>   
            </div>
            <MyBtn @click="updateUser" class="btn__success block ml-auto">save</MyBtn>
        </form>
        </div>
    </section>
</template>