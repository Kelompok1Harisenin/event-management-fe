import axios from "../hooks/useAxios";
import Cookies from "js-cookie";

const authService = {
  login: async (params) => {
    const data = {
      email: params.email,
      password: params.password,
    };
    const response = await axios("POST", "/auth/login", data);
    return response;
  },
  logout: async (refreshToken) => {
    const headers = {
      Authorization: JSON.parse(Cookies.get("accessToken")),
    };
    const response = await axios(
      "POST",
      "/auth/logout",
      { refreshToken },
      { headers }
    );
    return response;
  },
};

export default authService;
