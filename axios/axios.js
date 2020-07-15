import axios from "axios";

// creating a axios instance
const instance = axios.create({
  baseURL: " https://api.chucknorris.io",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});
export default instance;
