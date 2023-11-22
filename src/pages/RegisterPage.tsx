import React from 'react';
import { centered } from '../utils/styles/constants';
import { Link } from 'react-router-dom';
import { Pages } from './constants/pages';
import FormComponent from '../components/FormComponent';
import { useDispatch } from 'react-redux';
import AuthService from '../api/services/AuthService';

const RegisterPage = () => {
  const onRegistration = (email: string, password: string) => {

  }

  return (
    <div style={{...centered, height: '100vh', flexDirection: 'column',}}>
      <h1>RegisterPage</h1>
      <FormComponent title='Register' handleClick={onRegistration}/>
      <p><Link to={Pages.LOGIN_PAGE}>Login</Link></p>
    </div>
  );
}

export default RegisterPage;