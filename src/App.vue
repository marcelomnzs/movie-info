<script setup>
    import { RouterView } from 'vue-router'
    import NavBar from './components/NavBar.vue'
    import ToWatchForm from './components/ToWatchForm.vue'
    import ToWatchMoviesDetails from './components/ToWatchMoviesDetails.vue'
    import { useToWatchStore } from './stores/ToWatchStore';

    const toWatch = useToWatchStore()
</script>

<template>
    <header>
        <NavBar/>
    </header>

    <main>
        <div class="flex flex-col align-center justify-center items-center pt-5">
            <h1 class="text-3xl">To Watch movies</h1>
            <ToWatchForm/>
        </div>

        <div class="mt-5 p-5">
            <div v-for="movie in toWatch.toWatchList" :key="movie.id">
                <ToWatchMoviesDetails :movie="movie" />
            </div>
        </div>
    </main>
    <RouterView />
</template>

