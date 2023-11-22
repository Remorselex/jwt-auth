import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
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

export type AppThunkDispatch = ThunkDispatch<RootState, undefined, AnyAction>;