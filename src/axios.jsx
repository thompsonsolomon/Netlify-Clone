import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});
export default instance;

// https://api.themoviedb.org/3/trending/all/week?api_key=201d98f9998ff14852dc2f7fdc57d82f&language=en-US