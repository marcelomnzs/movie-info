<template>
    <div class="flex justify-center">
        <p>{{ movie.title }} | {{ movie.id }}</p>
        <div class="flex">
            <p>favoritar</p>
            <p>deletar</p>
        </div>
    </div>
</template>

<script>
    import { useMovieStore } from '../stores/MoviesStore';

    export default {
        name: 'ToWatchMoviesDetails',
        props: ['movie'],

        setup() {
            const toWatchStore = useMovieStore()

            return{ toWatchStore }
        }
    }
</script>