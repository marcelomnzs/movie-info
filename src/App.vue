<script setup>
import { RouterView } from 'vue-router'
import { ref, computed } from 'vue'
import { useToWatchStore } from './stores/ToWatchStore'
import { useRouter } from 'vue-router';
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import ToWatchForm from './components/ToWatchForm.vue'

const inputValue = ref('')
const toWatchStore = useToWatchStore()
const componentKey = ref(0)
const router = useRouter()

const forceRerender = () => {
    componentKey.value ++
}

onMounted(() =>{
    console.log('Componente montado')
    console.log(componentKey.value)
    toWatchStore.callMoviesFromDB()
    forceRerender()
})

const showNav = computed(() => {
    if(router.currentRoute.value.name == 'LandingPage') {
        return false
    }

    if(router.currentRoute.value.name == 'LoginPage'){
        return false
    }

    if (router.currentRoute.value.name == 'SignUp'){
        return false 
    }

    return true
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

        <div v-if="showNav">
            <ToWatchForm v-model="inputValue"/>
        </div>
        
    </main>
    <RouterView />
</template>

