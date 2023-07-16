import { Navigate, Outlet } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Auth from "../utils/helpers/auth";

const PrivateRoute = () => {
  if (Auth.isAuthenticated()) {
    console.log(Auth.isAuthenticated());
    return (
      <RootLayout>
        <Outlet />
      </RootLayout>
    );
  }

  // Redirect to login page
  return <Navigate to="/login" />;
};

export default PrivateRoute;
