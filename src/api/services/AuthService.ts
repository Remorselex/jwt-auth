import { AxiosResponse } from "axios";
import api from "../AxiosClient";
import { AuthResponce } from "./types/types";


export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponce>> {
    return api.post('/login', { email, password });
  }
  static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponce>> {
    return api.post('/registration', { email, password });
  }
  static async logout(): Promise<AxiosResponse<AuthResponce>> {
    return api.post('/logout');
  }
}