const API_KEY = "201d98f9998ff14852dc2f7fdc57d82f";

const requests = {
//     fetchNetFlixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&Language=eu-US`,
//     fetchTrending: `/movie/top_rated?api_key=${API_KEY}&Language=eu-US`,
//    fetchActionMovies:  `/movie/top_rated?api_key=${API_KEY}&Language=eu-US`  ,
//     fetchComedyMovies:  `/movie/top_rated?api_key=${API_KEY}&Language=eu-US`  ,
//     fetchHorrorMovies:  `/movie/top_rated?api_key=${API_KEY}&Language=eu-US`  ,
//     fetchRomanceMovies:  `/movie/top_rated?api_key=${API_KEY}&Language=eu-US`  ,
//     fetchDocumentries:  `/movie/top_rated?api_key=${API_KEY}&Language=eu-US`  ,

fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
}
export default requests;
