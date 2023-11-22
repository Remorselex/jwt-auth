import React, { useEffect } from 'react';
import { Route, Routes } from "react-router";
import { Pages } from './pages/constants/pages';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ImagePage from './pages/ImagePage';
import ProtectedRoute from './components/ProtectedRoute';
import { useDispatch } from 'react-redux';
import { refreshToken } from './store/authSlice/authSlice';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState, store } from './store/store';
import setupInterceptors from './api/SetupInterceptors';
import useAuth from './hooks/useAuth';

function App() {
  const dispatch = useDispatch<ThunkDispatch<{ auth: RootState }, undefined, AnyAction>>(); 

  useEffect(() => {
    const cleanup = setupInterceptors(store);
    dispatch(refreshToken());
    return cleanup;
  }, [dispatch]);

  return (
    <Routes>
      <Route path={Pages.LOGIN_PAGE} Component={LoginPage}/>
      <Route path={Pages.REGISTER_PAGE} Component={RegisterPage}/>
      <Route Component={ProtectedRoute}>
        <Route path={Pages.IMAGE_PAGE} Component={ImagePage}/>
      </Route>

    </Routes>
  );
};



export default App;
