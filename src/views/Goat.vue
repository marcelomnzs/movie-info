<template>

    <div class="flex justify-center">
        <h1>Greatest of All Time</h1>
    </div>

    <div class="grid grid-cols-4 gap-5">
        <div v-for="movie in movieStore.movies" :key="movie.id">
            <MovieCard :movie="movie"/>
        </div>
    </div>
</template>

<script>
    import MovieCard from '../components/MovieCard.vue';
    import { useMovieStore } from '../stores/MoviesStore';

    export default {
        setup() {
            const movieStore = useMovieStore()
            return { movieStore }
        },      
        name: 'GoatList',
        components: { MovieCard },

        mounted() {
            this.movieStore.getGOATMovies()
        }
    }
</script>