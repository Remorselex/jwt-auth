import React from 'react'
import LoginForm from '../components/LoginForm';
import { centered } from '../utils/styles/constants';
import { Link } from 'react-router-dom';
import { Pages } from './constants/pages';


const LoginPage = () => {

  const container: React.CSSProperties = {
      ...centered,
      flexDirection: 'column',
      height: '100vh',
  }

  return (
    <div style={container}>
      <h1>Login</h1>
      <LoginForm/>
      <p>or <Link to={Pages.REGISTER_PAGE}>Register </Link></p>
    </div>
  );
}

export default LoginPage;