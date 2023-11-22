import React from 'react';
import FormComponent from './FormComponent';
import { login } from '../store/authSlice/authSlice';
import { useDispatch } from 'react-redux';
import { Pages } from '../pages/constants/pages';
import { useNavigate } from 'react-router';
import { AppThunkDispatch } from '../api/services/types/types';


const LoginForm: React.FC = () => {
  const dispatch: AppThunkDispatch = useDispatch(); 
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