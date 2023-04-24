const API_KEY = "233fa8f526c6e3a353354760ca97320c";

const requests = {
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=es-ES`,
    fetchTrendingMovies: `/trending/movie/day?api_key=${API_KEY}&language=es-ES`,
    // fetchGenres: `/movie/{movie_id}?api_key=${API_KEY}&language=es-ES`
}


export default requests