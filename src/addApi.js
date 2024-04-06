import axios from 'axios';

const BASE_URL = 'fb9a411dd171b7eb3aae557cf32071d1';

export const fetchMovie = async query => {
  const URL = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  const options = {
    params: {
      api_key: BASE_URL,
    },
  };

  try {
    const response = await axios.get(URL, options);
    return response.data;
  } catch (error) {
    console.error("We have some problems.Try again");
    throw error;
  }
};

export const fetchDetails = async movieId => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

  const options = {
    params: {
      api_key: BASE_URL,
    },
  };
  try {
    const response = await axios.get(URL, options);
    return response.data;
  } catch (error) {
    console.error("We have some problems.Try again");
    throw error;
  }
};

export const fetchCast = async movieId => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  const options = {
    params: {
      api_key: BASE_URL,
    },
  };
  try {
    const response = await axios.get(URL, options);
    return response.data;
  } catch (error) {
    console.error("We have some problems.Try again");
    throw error;
  }
};

export const fetchReviews = async movieId => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
  const options = {
    params: {
      api_key: BASE_URL,
    },
  };
  try {
    const response = await axios.get(URL, options);
    return response.data;
  } catch (error) {
    console.error("We have some problems.Try again");
    throw error;
  }
};

export const fetchMovies = async () => {
  const URL = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
  const options = {
    params: {
      api_key: BASE_URL,
    },
  };
  try {
    const response = await axios.get(URL, options);
    return response.data;
  } catch (error) {
    console.error("We have some problems.Try again");
    throw error;
  }
};