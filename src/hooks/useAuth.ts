import { useSelector } from "react-redux";
import { authSelector } from "../store/authSlice/authSlice";
import { useEffect } from "react";


export const useAuth = () => {
  const { isAuthenticated } = useSelector(authSelector);
  return isAuthenticated;
}

export default useAuth;