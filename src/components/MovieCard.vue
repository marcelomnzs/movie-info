<template>
    <div class="bg-white rounded-lg h-auto border overflow-hidden">
        <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path">
        <div class="p-6 flex flex-col items-center">
            <p class="font-semibold text-lg truncate ">{{ movie.title }}</p>
            <div class="flex items-center text-sm">
                <h3 class="pr-1 font-semibold text-base text-teal-700">{{ movie.vote_average }}</h3>
                &bullet;
                <span class="pl-1 tracking-wide font-bold uppercase text-xs text-gray-600">({{ movie.vote_count }}
                    reviews)</span>
            </div>
            <p v-show="showMore" class="text-gray-500 text-sm mt-3">{{ movie.overview }}</p>
            <h4 class="flex flex-col text-gray-500 text-sm">Data de lançamento: {{ movie.release_date }}</h4>
            <button @click="changeShowMore" class="text-sm">Mostrar mais</button>
        </div>
    </div>
</template>

<script>
import { useMovieStore } from '../stores/MoviesStore';
import { ref } from 'vue'

export default {
    name: 'MovieCard',
    props: ['movie'],

    setup() {
        const showMore = ref(false)
        const movieStore = useMovieStore()
        return { movieStore, showMore }
    },

    methods: {
        changeShowMore() {
            this.showMore ? this.showMore = false : this.showMore = true;
        }
    }

}
</script>