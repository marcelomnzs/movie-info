<template>
    <div class="flex justify-around border p-5">
        <p>{{ item.title }}</p>
        <p>id:{{ item.id }}</p>
        <div class="flex gap-3 ml-3">
            <p>Assistir depois</p>
            <p>deletar</p>
        </div>
    </div>
</template>

<script>
    import { useMovieStore } from '../stores/MoviesStore';

    export default {
        name: 'ToWatchMoviesDetails',
        props: ['item'],

        setup() {
            const toWatchStore = useMovieStore()

            return{ toWatchStore }
        }
    }
</script>