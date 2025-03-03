import axios from "axios";
//como não estamos usando autenticação, não é necessário passar o token JWT
const api = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
