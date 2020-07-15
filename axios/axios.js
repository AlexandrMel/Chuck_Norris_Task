const axios = require("axios");
const instance = axios.create({
  baseURL: " https://api.chucknorris.io",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});
module.exports = instance;
