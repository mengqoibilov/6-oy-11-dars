import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getUsers = () => api.get("/users");
export const getPosts = () => api.get("/posts");
export const getComments = () => api.get("/comments");
export const getAlbums = () => api.get("/albums");


