import React from 'react';
import { centered } from '../utils/styles/constants';
import { Link } from 'react-router-dom';
import { Pages } from './constants/pages';

const RegisterPage = () => {
  return (
    <div style={{...centered, height: '100vh', flexDirection: 'column',}}>
      <h1>RegisterPage</h1>
      <p><Link to={Pages.LOGIN_PAGE}>Login</Link></p>
    </div>
  );
}

export default RegisterPage;