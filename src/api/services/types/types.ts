export interface IUser {
  email: string;
  id: string;
}

export interface AuthResponce {
  isAuthenticated: boolean;
  accessToken: string;
  refreshToken: string;
  user: IUser;
}