<script setup>
import { RouterView } from 'vue-router'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import ToWatchForm from './components/ToWatchForm.vue'

const inputValue = ref('')
const componentKey = ref(0)
const router = useRouter()

const forceRerender = () => {
    componentKey.value ++
}

onMounted(() =>{
    console.log('Componente montado')
    console.log(componentKey.value)
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

    if (router.currentRoute.value.name == 'HomePage') {
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

