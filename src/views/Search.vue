<template>
    <!-- <div class="flex items-center justify-center">
        {{ movieStore.searchResult }}
    </div> -->
    <div class="grid grid-cols-4 px-12 py-8 gap-7">
        <div v-for="item in movieStore.searchResult" :key="item.id">
            <MovieCard :movie="item" :mediaType="mediaType"/>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useMovieStore } from '../stores/MoviesStore';
import MovieCard from '../components/MovieCard.vue';

export default {
    name: 'SearchPage',
    setup() {
        const router = useRoute();
        const movieStore = useMovieStore();
        const mediaType = router.query.media;
        // Função disparada no envio do form
        const handleSubmit = () => {
            const data = router.params.item;
            // Verifies if the input is empty
            if (data.length > 0) {
                movieStore.search(data, mediaType);
            }
        };
        return { handleSubmit, router, movieStore, mediaType };
    },
    mounted() {
        this.handleSubmit();
    },
    components: { MovieCard }
}
</script>