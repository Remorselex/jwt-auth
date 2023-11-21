import { AxiosResponse } from "axios";
import api from "../intex";

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