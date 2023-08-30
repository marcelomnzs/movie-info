import axios from 'axios'
import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [],
    // api_key: 'cdcd1140e0e0cce44a3b7b647e911614'
  }),

  getters: {
    
  },

  actions: {
    async getGOATMovies() {
      let res = await axios.get('https://tcq8l8fps4.execute-api.us-east-1.amazonaws.com/prod/goat', {
        params: {
          api_key: 'f69f570e1e7670ab862b33f9112996f5',
          language: 'pt-BR'
        }
      })
      let data = res
      console.log(data)
      this.movies = data.data.results

      if(res.error) {
        console.log(res.error)
      }
    },

    async getTopTrendingsMovies() {
      let res = await axios.get('https://tcq8l8fps4.execute-api.us-east-1.amazonaws.com/prod/toptrendings', {
        params: {
          api_key: 'f69f570e1e7670ab862b33f9112996f5',
          language: 'pt-BR'
        }
      })

      let data = res
      console.log(data)
      this.movies = data.data.results

      if(res.error) {
        console.log(res.error)
      }
    }
  }
})