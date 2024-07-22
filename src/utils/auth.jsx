import { Navigate, useLocation } from "react-router-dom";
import { api } from "./axios";
import { configureAuth } from "react-query-auth";
const getAccountInfo = () => {
  return api.get("/auth/me");
};

const logout = () => {
  return api.post("/auth/logout");
};

const loginFn = (data) => {
  return api.post("/auth/login", data);
};

const registerFn = (data) => {
  return api.post("/auth/register", data);
};

const authConfig = {
  userFn: getAccountInfo,
  loginFn: async (data) => {
    return await loginFn(data);
  },
  registerFn: async (data) => {
    return await registerFn(data);
  },
  logoutFn: logout,
};

export const { useUser, useLogin, useLogout, useRegister, AuthLoader } =
  configureAuth(authConfig);

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ children }) => {
  const user = useUser();
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to={`/auth/login?redirect=${encodeURIComponent(location.pathname)}`}
      ></Navigate>
    );
  }
  return children;
};
