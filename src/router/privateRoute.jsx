import { Navigate, Outlet } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import { authHelpers } from "../utils";

const PrivateRoute = () => {
  if (authHelpers.isAuthenticated()) {
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
