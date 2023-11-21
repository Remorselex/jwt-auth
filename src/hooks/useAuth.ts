import { useSelector } from "react-redux";
import { authSelector } from "../store/authSlice/authSlice";
import { useEffect } from "react";


export const useAuth = () => {
  const { token } = useSelector(authSelector);
  useEffect(() => console.log(token));

  return {
    isAuth: !!token,
    token,
  }
}

export default useAuth;