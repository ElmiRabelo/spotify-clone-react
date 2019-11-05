import axios from "axios";

const api = axios.create({
  baseURL: "https://spotify-clone-lite-elmi.herokuapp.com"
});

export default api;
