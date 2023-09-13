import { defineStore } from 'pinia'
import axios from 'axios'

export const useToWatchStore = defineStore('toWatchStore', {
    state: () => ({
        toWatchList: [],
    }),

    getters: {
        getToWatchLaterList(){
            return this.toWatchList
        }
    },

    actions: {
        async addToWatchList(movie) {
            console.log(movie.title)
            
            let data = {
                "adult": movie.adult,
                "backdrop_path": movie.backdrop_path,
                "genre_ids": movie.genre_ids,
                "id": movie.id,
                "original_language": movie.id,
                "original_title": movie.original_title,
                "overview": movie.overview,
                "popularity": movie.popularity,
                "poster_path": movie.poster_path,
                "release_date": movie.release_date,
                "title": movie.title,
                "video": movie.video,
                "vote_average": movie.vote_average,
                "vote_count": movie.vote_count
            }
            
            let res = await axios.post(`https://tcq8l8fps4.execute-api.us-east-1.amazonaws.com/prod/addtowatchlist`, data)
            
            if(res.error){
                console.log(res.error)
            }
            
            return true
        },

        async removeMovie(id){
            // console.log(id)
            let res = await axios.delete(`https://tcq8l8fps4.execute-api.us-east-1.amazonaws.com/prod/towatchlist?id=${id}`)

            if(res.error) {
                console.log(res.error)
            }
        },

        async callMoviesFromDB(){
            // tablename=ToWatchMovies
            let res = await axios.get('https://tcq8l8fps4.execute-api.us-east-1.amazonaws.com/prod/towatchlist?tablename=ToWatchMovies')
            
            
            if(res.error){
                console.log(res.error)
            }
            
            res.data.Items.forEach((movie) => this.toWatchList.push(movie))
        }
    }
})