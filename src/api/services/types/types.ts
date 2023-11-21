export interface IUser {
  email: string;
  id: string;
}

export interface AuthResponce {
  token: string;
  refreshToken: string;
  user: IUser;
}