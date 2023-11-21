import { Outlet} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';


const ProtectedRoute = () => {
  let isAuth = false;
  return ( isAuth ? <Outlet /> : <LoginPage />);
};

export default ProtectedRoute;