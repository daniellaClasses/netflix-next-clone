const API_KEY = "233fa8f526c6e3a353354760ca97320c";

// GET movie/popular
// GET /movie/top_rated
// GET 

const requests = {
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=es-ES`,
    fetchTrendingMovies: `/trending/movie/day?api_key=${API_KEY}&language=es-ES`
}


export default requests