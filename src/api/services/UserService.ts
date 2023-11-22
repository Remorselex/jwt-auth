import { AxiosResponse } from "axios";
import api from "../AxiosClient";

interface Icomment {
  userName: string;
  text: string;
}

interface Iimages {
  url: string;
  comment: Icomment;
}

export default class UserService {
  static fetchImages(): Promise<AxiosResponse<Iimages[]>> {
    return api.get<Iimages[]>('/images')
  }
}