import axios from "axios";

const apiKey = `b225eac962521eb30923e3ca6aece892`;
const apiEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

export const fetchMovies = async () => {
  try {
    const response = await axios.get(apiEndpoint);
    const data = response.data;
    return data.results;
  } catch (error) {
    throw error;
  }
};
