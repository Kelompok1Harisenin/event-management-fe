import useAxios from "../hooks/useAxios";
import Cookies from "js-cookie";

const Login = async (params) => {
  const data = {
    email: params.email,
    password: params.password,
  };
  const response = await useAxios("POST", "/auth/login", data);
  return response;
};

const Logout = async (refreshToken) => {
  const headers = {
    Authorization: JSON.parse(Cookies.get("accessToken")),
  };
  const response = await useAxios(
    "POST",
    "/auth/logout",
    { refreshToken },
    { headers }
  );
  return response;
};

export { Login, Logout };
