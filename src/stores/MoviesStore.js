import axios from 'axios'
import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movieStore', {
	state: () => ({
		movies: [],
		searchResult: [],
	}),

	getters: {

	},

	actions: {
		// Pequisa na API por filme/série/ator/diretor 
		async search(keyword, option) {
			// TODO: Alterar API e fazer rota para pequisa de Filmes no API Gateway 

			// Requisição da API de filmes 
			const res = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${keyword}&language=pt-BR`, {
				params: {
					api_key: '8ec2d5978727fb5f51af131135f7a3ce',
					language: 'pt-BR'
				}
			})

			const rawData = res.data.results

			// Tratamento dos dados de resposta (verifica se o item achado é de fato um filme)
			switch (option) {
				case 'movie': {
					const movies = rawData.filter(isMovie => (isMovie.media_type === 'movie'));
					this.searchResult = movies
					break;
				}

				case 'tv': {
					const tv = rawData.filter(isTv => (isTv.media_type === 'tv'));
					this.searchResult = tv
					break;
				}

				case 'actor': {
					const actor = rawData.filter(isActor => (isActor.media_type === 'person' && isActor.known_for_department === 'Acting'));
					this.searchResult = actor
					break;
				}

				case 'director': {
					const director = rawData.filter(isDirector => (isDirector.media_type === 'person' && isDirector.known_for_department === 'Directing'));
					this.searchResult = director
					break;
				}
			}

			// Se a requisição retornar um erro
			if (res.error) {
				console.log(res.error)
			}
		},

		async getGOATMovies() {
			let res = await axios.get('https://tcq8l8fps4.execute-api.us-east-1.amazonaws.com/prod/goat', {
				params: {
					api_key: '8ec2d5978727fb5f51af131135f7a3ce',
					language: 'pt-BR'
				}
			})

			this.movies = res.data.results

			if (res.error) {
				console.log(res.error)
			}
		},

		async getTopTrendingsMovies() {
			let res = await axios.get('https://tcq8l8fps4.execute-api.us-east-1.amazonaws.com/prod/toptrendings', {
				params: {
					api_key: '8ec2d5978727fb5f51af131135f7a3ce',
					language: 'pt-BR'
				}
			})

			this.movies = res.data.results

			if (res.error) {
				console.log(res.error)
			}
		}
	}
})