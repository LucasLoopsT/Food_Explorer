import axios from "axios";

export const api = axios.create({
  baseURL: "https://food-explorer-api-cq82.onrender.com"
});