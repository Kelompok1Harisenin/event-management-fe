import Cookies from "js-cookie";

const Auth = {
  login: (token) => {
    Cookies.set("token", token);
  },
  logout: () => {
    Cookies.remove("token", { path: "/" });
  },
  isAuthenticated: () => {
    return !!Cookies.get("token");
  },
};

export default Auth;
