const axios = require("../axios/axios");

exports.getJoke = async () => {
  const Joke = await axios.get("/jokes/random");
  console.log(Joke.data);
  return Joke.data;
};
