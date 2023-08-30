<template>
    <div>
        <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path">
        <h3>{{ movie.title }}</h3>
    </div>
</template>

<script>
import { useMovieStore } from '../stores/MoviesStore';

    export default {
        name: 'MovieCard',
        props: ['movie'],

        setup() {
            const movieStore = useMovieStore()
            return { movieStore }
        }
    }
</script>