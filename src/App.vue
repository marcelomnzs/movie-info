<script setup>
    import { RouterView } from 'vue-router'
    import { ref } from 'vue'
    import { useMovieStore } from './stores/MoviesStore'
    import NavBar from './components/NavBar.vue'
    import ToWatchForm from './components/ToWatchForm.vue'
    import ToWatchMoviesDetails from './components/ToWatchMoviesDetails.vue'
    const inputValue = ref('')
    const movieStore = useMovieStore()

</script>

<template>
    <header>
        <NavBar/>
    </header>

    <main>
        <div class="flex flex-col align-center justify-center items-center w-64 w-full mx-auto mt-6">
            <h1 class="text-3xl pb-3">To Watch movies</h1>
            <ToWatchForm 
            v-model="inputValue"
            /> 
        </div>
        
        <div class="mt-3 p-5">
            <div v-for="item in movieStore.searchResult" :key="item.id">
                <ToWatchMoviesDetails :item="item" />
            </div>
        </div>
    </main>
    <RouterView />
</template>

