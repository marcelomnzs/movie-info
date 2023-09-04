<template>
    <div class="flex items-center justify-center">
        {{ movieStore.searchResult }}
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useMovieStore } from '../stores/MoviesStore';

export default {
    name: 'SearchPage',
    setup() {
        const router = useRoute()
        const movieStore = useMovieStore()
        // Função disparada no envio do form
        const handleSubmit = () => {
            const data = router.params.item
            const searchType = router.query.media    

            // Verifies if the input is empty
            if (data.length > 0) {
                movieStore.search(data, searchType);
            }
        };
        return { handleSubmit, router, movieStore }

    },

    mounted() {
        this.handleSubmit()
    }

}
</script>