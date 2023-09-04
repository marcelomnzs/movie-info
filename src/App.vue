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
        <NavBar/>
    </header>

    <main>
        <div class="flex h-screen items-center align-center justify-center">
            <div class="relative -top-16 flex flex-col items-center self-center">
                <h1 class="text-3xl mb-2">To Watch movies</h1>
                <ToWatchForm 
                v-model="inputValue"
                /> 
            </div>
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

