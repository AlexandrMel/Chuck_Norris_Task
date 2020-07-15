import axios from "../axios/axios.js";

export const getAChuckNorrisJoke = async () => {
  const Joke = await axios.get("/jokes/random");
  console.log(Joke.data);
  return Joke.data;
};
