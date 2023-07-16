import { useLocation } from "react-router-dom";
import { LoginForm, RegisterForm } from "./../components";

const AuthForm = () => {
  const location = useLocation();

  let formComponent;
  if (location.pathname === "/login") {
    formComponent = <LoginForm />;
  } else {
    formComponent = <RegisterForm />;
  }

  return (
    <section>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full md:w-1/2 bg-white flex flex-col items-center">
          <div className="flex flex-col items-center justify-center h-full">
            {formComponent}
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2 bg-green-300 items-center justify-center">
          <img
            src="https://images.pexels.com/photos/2147029/pexels-photo-2147029.jpeg?cs=srgb&dl=pexels-laura-stanley-2147029.jpg&fm=jpg"
            alt="auth-form-img"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
