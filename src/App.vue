<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
// import { useMovieStore } from './stores/MoviesStore'
import NavBar from './components/NavBar.vue'
import ToWatchForm from './components/ToWatchForm.vue'
// import ToWatchMoviesDetails from './components/ToWatchMoviesDetails.vue'
// import { useToWatchStore } from './stores/ToWatchStore'
const inputValue = ref('')
    // const movieStore = useMovieStore()
    // const toWatchStore = useToWatchStore()

</script>

<template>
    <header>
        <NavBar />
    </header>

    <main>
        <div v-if="$router.currentRoute.value.name != 'search'">
            <ToWatchForm v-model="inputValue"/>
        </div>

        <!-- <div class="mt-3 p-5">
            <div v-for="item in movieStore.searchResult" :key="item.id">
                <ToWatchMoviesDetails :item="item" />
            </div>
        </div>

        <div class="mt-3 p-5 bg-red-600">
            <div v-for="item in toWatchStore.toWatchList" :key="item.id">
                <ToWatchMoviesDetails :item="item" />
            </div>
        </div> -->
    </main>
    <RouterView />
</template>

