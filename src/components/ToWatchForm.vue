<template>
    <form @submit.prevent="handleSubmit">
        <input
        type="text"
        placeholder="I need to..."
        v-model="newMovie"
        >

        <button class="bg-blue-600 p-2 rounded text-white">Adicionar Filme</button>
    </form>
</template>

<script>
    import { useToWatchStore } from '../stores/ToWatchStore';
    import { ref } from 'vue'
    export default {
        name: 'ToWatchForm',

        setup() {
            const toWatchStore = useToWatchStore()
            const newMovie = ref('')

            const handleSubmit = () => {
                if(newMovie.value.length > 0){
                    // toWatchStore.addMovieToWatchList({
                    //     title: newMovie.value,
                    //     id: Math.floor(Math.random() * 1000)
                    // })
                    toWatchStore.addMovieToWatchList({
                        title: newMovie.value,
                        id: Math.floor(Math.random() * 10000)
                    })

                    newMovie.value = ''
                }
            }
            return { handleSubmit, newMovie }
        }
    }
</script>