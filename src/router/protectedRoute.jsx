import { Navigate, Outlet } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import { authHelpers } from "../utils";

const ProtectedRoute = () => {
  if (!authHelpers.isAuthenticated()) {
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
