<script setup>
    import useAuth from "@/hooks/useAuth";
    const { user } = useAuth()
</script>

<template>
    <section class="page__content">
        <div class="row">
        <div class="page__head">
            <h1>main page</h1>
        </div>
        <p class="text-xl">Добро пожаловать, <b class="text-blue-500">{{user?.login}}</b>!</p>
        <br>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eveniet officiis nesciunt natus omnis quibusdam obcaecati quisquam. Eligendi quo dolorum dolores vitae pariatur tenetur perferendis dolorem quibusdam aliquid veniam tempore reprehenderit itaque deleniti maxime atque rerum necessitatibus sequi, est qui accusamus placeat reiciendis debitis. Veritatis odio vitae inventore amet ipsam.</p>
        </div>
    </section>
</template>