import { Outlet} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import useAuth from '../hooks/useAuth';
import { useEffect } from 'react';


const ProtectedRoute = () => {
  const {isAuth} = useAuth();
  useEffect(() => console.log(isAuth));
  
  return ( isAuth ? <Outlet /> : <LoginPage />);
};

export default ProtectedRoute;