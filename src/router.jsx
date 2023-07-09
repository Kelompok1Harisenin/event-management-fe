import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { Home, About, AuthForm, CreateEvent } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<AuthForm />} />
      <Route path="register" element={<AuthForm />} />
      <Route path="create-event" element={<CreateEvent />} />
    </Route>
  )
);

export default router;
