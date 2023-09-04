<template>
    <div class="flex justify-around border p-5">
        <p>{{ item.title }}</p>
        <p>id:{{ item.id }}</p>
        <!-- <div class="flex gap-3 ml-3">
            <button @click.prevent="addToWatchList(item)">Assistir depois</button>
            <button @click.prevent="deleteMovieFromWatchList(item.id)">Deletar</button>
        </div> -->
    </div>
</template>

<script>
import { useToWatchStore } from '../stores/ToWatchStore'


export default {
    name: 'ToWatchMoviesDetails',
    props: ['item'],

    setup() {
        const toWatchStore = useToWatchStore()
        return { toWatchStore }
    },

    methods: {
        addToWatchList(item) {
            this.toWatchStore.toWatchList.push(item)
        },

        deleteMovieFromWatchList(id) {
            console.log(id)
            return id
        }
    }
}
</script>