import axios from "axios";
import { LoginType } from "../types/loginType";
import { RegisterType } from "../types/registerType";

export const api = axios.create({
  baseURL: "https://arnia-kanban.vercel.app/",
  headers: {
    "x-api-key": "52a8b954-e25d-4cc5-86e5-c32e92f994bb",
  },
});

export const loginService = async ({ email, password }: LoginType) => {
  const response = await api.post("api/user/login", { email, password });
  return response.data;
};

export const registerService = async ({
  email,
  password,
  name,
}: RegisterType) => {
  const response = await api.post("api/user", { email, password, name });
  return response.data;
};
