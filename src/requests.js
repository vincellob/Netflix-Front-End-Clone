const API_KEY = "4bf678828eca19da2ba06380f13af38b";

const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en=us`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en=us`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_generes=28`,
    fetch
  }
  
  export default requests;