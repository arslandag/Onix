import axios from "axios";

export const API_URL: string = "http://localhost:5034/";

export const api = axios.create({
	baseURL: API_URL, 
	withCredentials: true,
});