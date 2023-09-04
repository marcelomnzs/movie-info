<template>
    <div class="flex h-screen justify-center self-center relative flex flex-col items-center">
        <h1 class="text-3xl mb-2">To Watch movies</h1>
        <form @submit.prevent="redirectToSearchPage" class="flex appearance-none select-none">
            <input type="text" v-model="item" placeholder="Eu quero assistir..." class="border-b border-black">
            <select name="search-options" v-model="searchOption">
                <option value="movie" selected>Filme</option>
                <option value="tv">Série</option>
                <option value="actor">Ator</option>
                <option value="director">Diretor</option>
            </select>
            <button class="bg-blue-600 px-5 py-1 rounded-lg">Pesquisar filme</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const searchOption = ref('movie')

export default {
    name: 'ToWatchForm',

    setup() {
        const router = useRouter()
        const item = ref('')
        return { item, searchOption, router };
    },

    methods: {
        // Redireciona para uma outra view
        redirectToSearchPage() {
            this.handleSubmit
            this.router.push(`/search/${this.item}?media=${this.searchOption}`)
        }
    }
}
</script>