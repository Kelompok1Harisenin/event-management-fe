import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/slices/authSlice";
import { ErrorPopup } from "../../components";
import Cookies from "js-cookie";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await dispatch(loginUser(formData));
      if (result.payload) {
        const tokens = result.payload.tokens;
        Cookies.set("user", JSON.stringify(result.payload.user));
        Cookies.set("accessToken", JSON.stringify(tokens.access.token));
        Cookies.set("refreshToken", JSON.stringify(tokens.refresh.token));
        navigate("/");
      } else {
        setError(result.error?.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const closeErrorPopup = () => {
    setError(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-2xl mb-4 font-bold">Log In</h2>
      <form
        className="w-full max-w-md sm:w-[300px] md:w-[350px]"
        onSubmit={handleLogin}
      >
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@mail.com"
            className="input input-bordered input-warning w-full hover:border-orange-300 hover:border-2 transition duration-200 ease-in-out"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password must be at least 8 characters"
            className="input input-bordered input-warning w-full hover:border-orange-300 hover:border-2 transition duration-200 ease-in-out"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 w-full rounded-md transition duration-200 ease-in-out"
          >
            Login
          </button>
        </div>

        <div className="flex-col text-sm mt-2 ">
          <div>
            <button>Forgot Password?</button>
          </div>
          <div>Or</div>
          <div>
            <button>Create New Account</button>
          </div>
        </div>

        {error && <ErrorPopup message={error} onClose={closeErrorPopup} />}
      </form>
    </div>
  );
};

export default LoginForm;
