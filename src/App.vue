<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { useToWatchStore } from './stores/ToWatchStore'
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import ToWatchForm from './components/ToWatchForm.vue'
const inputValue = ref('')
const toWatchStore = useToWatchStore()

onMounted(() =>{
    toWatchStore.callMoviesFromDB()
})

</script>

<template>
    <header>
        <NavBar />
    </header>

    <main>
        <div v-for="movie in toWatchStore.toWatchList" :key="movie.id">
            {{ movie.title.S }} | {{ movie.id.N }}
        </div>

        <div v-if="$router.currentRoute.value.name != 'search'">
            <ToWatchForm v-model="inputValue"/>
        </div>
        
    </main>
    <RouterView />
</template>

