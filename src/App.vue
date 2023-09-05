<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import ToWatchForm from './components/ToWatchForm.vue'
const inputValue = ref('')

</script>

<template>
    <header>
        <NavBar />
    </header>

    <main>
        <div v-if="$router.currentRoute.value.name != 'search'">
            <ToWatchForm v-model="inputValue"/>
        </div> 
    </main>
    <RouterView />
</template>

