<template>
    <div>
        This is the Top trendings Page
        <div class="grid grid-cols-4 gap-5">
        <div v-for="movie in movieStore.movies" :key="movie.id">
            <MovieCard :movie="movie"/>
        </div>
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