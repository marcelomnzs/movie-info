import { defineStore } from 'pinia'

export const useToWatchStore = defineStore('toWatchStore', {
    state: () => ({
        toWatchList: [],
    }),

    getters: {

    },

    actions: {
        addToWatchList(movie) {
            this.toWatchList.push(movie)
        },
    }
})