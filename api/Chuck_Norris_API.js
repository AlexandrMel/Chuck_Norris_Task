import axios from "../axios/axios.js";
// fetching new joke from https://api.chucknorris.io"
export const getAChuckNorrisJoke = async () => {
  try {
    const Joke = await axios.get("/jokes/random");
    console.log(Joke.data);
    return Joke.data;
  } catch (error) {
    console.log(error.message);
  }
};
