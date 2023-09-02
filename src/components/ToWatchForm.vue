<template>
    <form @submit.prevent="handleSubmit" class="flex appearance-none select-none">
        <input type="text" v-model="movie" placeholder="Eu quero assistir..." class="border-b border-black">
        <select name="search-options" v-model="searchOption">
            <option value="movie" selected>Filme</option>
            <option value="tv">Série</option>
            <option value="actor">Ator</option>
            <option value="director">Diretor</option>
        </select>
        <button class="bg-blue-600 px-5 py-1 rounded-lg">Pesquisar filme</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import { useToWatchStore } from '../stores/ToWatchStore';
import { useMovieStore } from '../stores/MoviesStore';

export default {
    name: 'ToWatchForm',

    setup() {
        // eslint-disable-next-line no-unused-vars
        const toWatchStore = useToWatchStore();
        const movieStore = useMovieStore();
        const movie = ref('')
        const searchOption = ref('movie')
        const handleSubmit = () => {
            // Verifies if the input is empty
            if (movie.value.length > 0) {
                console.log(searchOption)

                movieStore.search(movie.value, searchOption.value);
                movie.value = '';
            }
        };
        return { handleSubmit, movie, searchOption };
    },
}
</script>