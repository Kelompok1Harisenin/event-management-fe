import { Routes, Route } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import PrivateRoute from "./privateRoute";
import ProtectedRoute from "./protectedRoute";
import { Home, About, AuthForm, CreateEvent, EditEvent } from "../pages";

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>

      <Route path="/" element={<PrivateRoute />}>
        <Route path="create-event" element={<CreateEvent />} />
        <Route path="edit-event" element={<EditEvent />} />
      </Route>

      <Route path="/" element={<ProtectedRoute />}>
        <Route path="login" element={<AuthForm />} />
        <Route path="register" element={<AuthForm />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
