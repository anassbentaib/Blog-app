import axios from "axios";

export const signUp = (formData: any) =>
  axios.post(`/api/auth/signup`, formData);
