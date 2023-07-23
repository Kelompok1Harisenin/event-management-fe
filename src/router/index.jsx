import { Routes, Route } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import PrivateRoute from "./privateRoute";
import ProtectedRoute from "./protectedRoute";
import { Home, About, Auth, CreateEvent, EditEvent } from "../pages";
import { NotFound } from "../components";

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="/" element={<PrivateRoute />}>
        <Route path="create-event" element={<CreateEvent />} />
        <Route path="edit-event" element={<EditEvent />} />
      </Route>

      <Route path="/" element={<ProtectedRoute />}>
        <Route path="login" element={<Auth />} />
        <Route path="register" element={<Auth />} />
        <Route path="forgot" element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
