import { Outlet} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import useAuth from '../hooks/useAuth';


const ProtectedRoute = () => {
  const isAuthenticated = useAuth();

  return ( isAuthenticated ? <Outlet /> : <LoginPage />);
};

export default ProtectedRoute;