<template>
    <div class="flex justify-center mt-4">
        <h1 class="text-2xl font-black uppercase tracking-wide">Top Trendings</h1>
    </div>

    <div class="grid grid-cols-4 gap-4 col-auto px-9 py-3">
        <div v-for="movie in movieStore.movies" :key="movie.id">
            <MovieCard :movie="movie" :mediaType="'movie'"/>
        </div>
    </div>
</template>

<script>
import { useMovieStore } from '../stores/MoviesStore';
import MovieCard from '../components/MovieCard.vue';

    export default {
        
        name: 'TopTrendings',
        components: { MovieCard },
        setup () {
            const movieStore = useMovieStore()
            return { movieStore }
        },

        mounted() {
            this.movieStore.getTopTrendingsMovies()
        }
    }
</script>