import axios from "axios";
const baseUrl = "http://localhost:3000"

export const signUp = (formData: any) =>
  axios.post(`/api/auth/signup`, formData);
  export const createPost = (formData: any) =>
  axios.post(`${baseUrl}/api/post/create`, formData);
