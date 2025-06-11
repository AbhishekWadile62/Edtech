import axios from "axios";
const api = axios.create({
    baseURL: 'http://127.0.0.1:8080/auth'
});

export const googleAuth = (code) => api.get(`/google?code=${code}`);