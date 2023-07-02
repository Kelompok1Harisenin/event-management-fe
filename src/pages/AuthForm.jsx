import { useLocation } from "react-router-dom";
import { Login, Register } from "./../components";

const AuthForm = () => {
  const location = useLocation();

  let formComponent;
  if (location.pathname === "/login") {
    formComponent = <Login />;
  } else {
    formComponent = <Register />;
  }

  return (
    <section>
      <div className="flex h-screen">
        <div className="w-1/2 bg-slate-200 flex items-center justify-center">
          {formComponent}
        </div>
        <div className="w-1/2 bg-green-300"></div>
      </div>
    </section>
  );
};

export default AuthForm;
