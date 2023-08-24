<script setup>
    import { RouterView } from 'vue-router'
    import NavBar from './components/Navbar.vue'
</script>

<template>
    <header>
        <NavBar/>
    </header>

    <main>
        <div class="flex flex-col items-center justify-center mt-4">
            <h1 class="font-bold text-4xl py-2">Welcome to MovieInfo!</h1>
            <span>The place to learn everything about movies!</span>
        </div>
        
    </main>
    <RouterView />
</template>

