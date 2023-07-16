import { Navigate, Outlet } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Auth from "../utils/helpers/auth";

const ProtectedRoute = () => {
  if (!Auth.isAuthenticated()) {
    console.log(Auth.isAuthenticated());
    return (
      <RootLayout>
        <Outlet />
      </RootLayout>
    );
  }

  // Redirect to home page
  return <Navigate to="/" />;
};

export default ProtectedRoute;
