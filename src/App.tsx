import React from 'react';
import { Route, Routes } from "react-router";
import { Pages } from './pages/constants/pages';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ImagePage from './pages/ImagePage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path={Pages.LOGIN_PAGE} Component={LoginPage}/>
      <Route path={Pages.REGISTER_PAGE} Component={RegisterPage}/>
      <Route Component={ProtectedRoute}>
        <Route path={Pages.IMAGE_PAGE} Component={ImagePage}/>
      </Route>

    </Routes>
  );
}

export default App;
