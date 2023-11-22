import React from 'react';
import FormComponent from './FormComponent';
import { login } from '../store/authSlice/authSlice';
import { useDispatch } from 'react-redux';
import {RootState } from '../store/store';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { Pages } from '../pages/constants/pages';
import { useNavigate } from 'react-router';


const LoginForm: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<{ auth: RootState }, undefined, AnyAction>>(); 
  const navigate = useNavigate();
  
  const handleLogin = (email: string, password: string) => {
    const credentials = {
      email: email,
      password: password,
    };
    dispatch(login(credentials)).then((result) => {
      if (result.payload) {
        navigate(Pages.IMAGE_PAGE);
      }
    });
  }
  
  return (
    <FormComponent title='Log in' handleClick={handleLogin}/>
  );
};

export default LoginForm;