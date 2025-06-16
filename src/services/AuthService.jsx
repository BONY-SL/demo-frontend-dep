import axios from "axios";

const API = "http://34.200.96.211:8080/api/auth";

export const signup = (user) => axios.post(`${API}/signup`, user);
export const login = (user) => axios.post(`${API}/login`, user);