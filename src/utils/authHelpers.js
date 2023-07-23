import bcrypt from "bcryptjs";
import Cookies from "js-cookie";

const authHelpers = {
  getUserFromCookies: () => {
    const userCookie = Cookies.get("user");
    return userCookie ? JSON.parse(userCookie) : null;
  },
  isAuthenticated: () => {
    const userCookie = Cookies.get("user");
    const accessTokenCookie = Cookies.get("accessToken");
    const refreshTokenCookie = Cookies.get("refreshToken");

    return !!userCookie && !!accessTokenCookie && !!refreshTokenCookie;
  },
  hashPassword: async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  },
};

export default authHelpers;
