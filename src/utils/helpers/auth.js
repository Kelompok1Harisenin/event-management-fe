import Cookies from "js-cookie";

const Auth = {
  getUserFromCookies: () => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      return JSON.parse(userCookie);
    }
    return null;
  },
  isAuthenticated: () => {
    const userCookie = Cookies.get("user");
    const accessTokenCookie = Cookies.get("accessToken");
    const refreshTokenCookie = Cookies.get("refreshToken");

    return !!userCookie && !!accessTokenCookie && !!refreshTokenCookie;
  },
};

export default Auth;
