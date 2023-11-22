import { ThunkDispatch as ReduxThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../../../store/store';

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

export type AppThunkDispatch = ReduxThunkDispatch<{ auth: RootState }, undefined, AnyAction>;