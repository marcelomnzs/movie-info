import { defineStore } from 'pinia'

export const useToWatchStore = defineStore('toWatchStore', {
    state: () => ({
        toWatchList: [],
    }),

    getters: {

    },

    actions: {
        addMovieToWatchList(movie) {
            this.toWatchList.push(movie)
        }
    }
})