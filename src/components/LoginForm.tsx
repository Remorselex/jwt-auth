import React from 'react';
import FormComponent from './FormComponent';
import { login } from '../store/authSlice/authSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';


const LoginForm: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<{ auth: RootState }, undefined, AnyAction>>(); 
  
  const handleLogin = (email: string, password: string) => {
    const credentials = {
      email: email,
      password: password,
    };
    dispatch(login(credentials));
  }
  
  return (
    <FormComponent title='Log in' handleClick={handleLogin}/>
  );
};

export default LoginForm;