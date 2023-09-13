<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { useToWatchStore } from './stores/ToWatchStore'
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import ToWatchForm from './components/ToWatchForm.vue'
const inputValue = ref('')
const toWatchStore = useToWatchStore()
const componentKey = ref(0)

const forceRerender = () => {
    componentKey.value ++
}

onMounted(() =>{
    console.log('Componente montado')
    console.log(componentKey.value)
    toWatchStore.callMoviesFromDB()
    forceRerender()
})

</script>

<template>
    <header>
        <NavBar />
    </header>

    <main>
        <!-- <div class="flex flex-col items-center" :key="componentKey">
            <div v-for="movie in toWatchStore.toWatchList" :key="movie.id">
                {{ movie.title.S }} | {{ movie.id.N }}
            </div>
        </div> -->

        <div v-if="$router.currentRoute.value.name != 'LandingPage'">
            <ToWatchForm v-model="inputValue"/>
        </div>
        
    </main>
    <RouterView />
</template>

