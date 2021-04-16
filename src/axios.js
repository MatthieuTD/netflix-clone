import axios from "axios";

/** Url de base pour faire des requetes */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;