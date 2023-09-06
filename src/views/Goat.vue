<template>
    <div class="flex justify-center mt-4">
        <h1 class="text-2xl font-black uppercase tracking-wide">Greatest of All Time</h1>
    </div>
    
    <div class="grid grid-cols-4 gap-4 col-auto px-9 py-3">
        <div v-for="movie in movieStore.movies" :key="movie.id">
            <MovieCard :movie="movie" :mediaType="'movie'"/>
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