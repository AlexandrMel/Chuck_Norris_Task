import axios from "../axios/axios.js";
// fetching new joke from https://api.chucknorris.io"
export const getAChuckNorrisJoke = async () => {
  const Joke = await axios.get("/jokes/random");
  console.log(Joke.data);
  return Joke.data;
};
