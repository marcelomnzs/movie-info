<template>
    <div class="bg-white rounded-lg h-auto border overflow-hidden">
        <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" v-if="mediaType === 'movie' || mediaType === 'tv'">
        <img :src="'https://image.tmdb.org/t/p/w500/' + movie.profile_path" v-if="mediaType === 'actor' || mediaType === 'director'">

        <!-- If movie -->
        <div class="p-6 flex flex-col items-center" v-if="mediaType === 'movie'">
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
            <div class="bg-green-400 px-2 py-1 rounded-full mt-2 text-white">
                <button @click="addToWatchLater(this.movie)">Assistir mais tarde</button>
            </div>
        </div>

        <!-- If Tv show -->
        <div class="p-6 flex flex-col items-center" v-if="mediaType === 'tv'">
            <p class="font-semibold text-lg truncate ">{{ movie.name }}</p>
            <div class="flex items-center text-sm">
                <h3 class="pr-1 font-semibold text-base text-teal-700">{{ movie.vote_average }}</h3>
                &bullet;
                <span class="pl-1 tracking-wide font-bold uppercase text-xs text-gray-600">({{ movie.vote_count }}
                    reviews)</span>
            </div>
            <p v-show="showMore" class="text-gray-500 text-sm mt-3">{{ movie.overview }}</p>
            <h4 class="flex flex-col text-gray-500 text-sm">Data de lançamento: {{ movie.first_air_date }}</h4>
            <button @click="changeShowMore" class="text-sm">Mostrar mais</button>
        </div>

        <!-- If Actor -->
        <div class="p-6 flex flex-col items-center" v-if="mediaType === 'actor'">
            <p class="font-semibold text-lg truncate ">{{ movie.name }}</p>
            <div class="flex items-center text-sm">
                <h3 class="pr-1 font-semibold text-base text-teal-700">Popularidade: {{ movie.popularity }}</h3>
            </div>
            <p v-show="showMore" class="text-gray-500 text-sm mt-3">{{ movie.overview }}</p>
            <h4 class="flex flex-col text-gray-500 text-sm">Data de lançamento: {{ movie.first_air_date }}</h4>
            <button @click="changeShowMore" class="text-sm">Mostrar mais</button>
        </div>

        <!-- If director -->
        <div class="p-6 flex flex-col items-center" v-if="mediaType === 'director'">
            <p class="font-semibold text-lg truncate ">{{ movie.name }}</p>
            <div class="flex items-center text-sm">
                <h3 class="pr-1 font-semibold text-base text-teal-700">Popularidade: {{ movie.popularity }}</h3>
            </div>
        </div>

        

    </div>
</template>

<script>
import { useMovieStore } from '../stores/MoviesStore';
import { useToWatchStore } from '../stores/ToWatchStore';
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    name: 'MovieCard',
    props: {
        movie: Object,
        mediaType: String
    },

    setup() {
        const showMore = ref(false)
        const movieStore = useMovieStore()
        const toWatchStore = useToWatchStore()
        const router = useRouter()
        return { movieStore, toWatchStore, showMore, router }
    },

    methods: {
        changeShowMore() {
            this.showMore ? this.showMore = false : this.showMore = true;
        },

        addToWatchLater(movie) {
            if(this.toWatchStore.addToWatchList(movie)){
                this.router.push('/home')
            }
        }
    }

}
</script>