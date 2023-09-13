<template>
    <h1 class="text-center text-4xl py-4 font-bebas">Meus Filmes</h1>
    <div class="flex flex-col space-y-3 items-center text-center">
        <div class="flex justify-between items-center border border-black p-2 w-1/2" v-for="movie in toWatchStore.toWatchList" :key="movie.id">
            <p class="font-montserrat font-bold pl-8">{{ movie.title.S }}</p>
            <!-- <p class="font-montserrat pr-8 font-semibold">{{ movie.vote_average.N }}</p> -->
            <button class="px-5 py-1 bg-red-500 rounded-full text-white" @click.prevent="removeMovie(movie.id.N)">Já assisti</button>
        </div>
    </div>
</template>

<script>
import { useToWatchStore } from '../stores/ToWatchStore'

export default {
    name: 'HomePage',

    setup() {
        const toWatchStore = useToWatchStore()

        return { toWatchStore }
    },

    mounted() {
        this.toWatchStore.callMoviesFromDB()
    },

    methods: {
        removeMovie(id){
            this.toWatchStore.removeMovie(id)
        }
    }
}

</script>