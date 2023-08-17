<script setup>
    import { reactive } from "vue";
    import useAuth from "@/hooks/useAuth";
    const { login } = useAuth()

    const form = reactive({
        login: '',
        password: ''
    })

    const auth = () => {
        if(form.login.trim().length === 0 || form.password.trim().length === 0){
           return alert("Поля не должны быть пустыми! =)")
        }
        login({login: form.login, password: form.password})
    }
    
</script>

<template>
    <section class="page__content">
        <div class="row">
            <div class="page__head">
                <h1>Login page</h1>
            </div>
            
            <form class="form" @submit.prevent>
                <h3 class="form__head">Авторизация</h3>
                <MyInput v-model="form.login" placeholder="login" class="mb-4"/>
                <MyInputPass v-model="form.password" class="mb-4"/>
                <MyBtn @click="auth" class="btn__success block ml-auto">login</MyBtn>
            </form>

        </div>
    </section>
</template>

<style scoped>
    .form{
        max-width: 420px;
        margin: 30px auto;
        padding: 15px;
        border: 1px solid var(--done);
        border-radius: 3px;
    }
    .form__head{
        text-align: center;
        margin-bottom: 10px;
        font-weight: 600;
    }
</style>