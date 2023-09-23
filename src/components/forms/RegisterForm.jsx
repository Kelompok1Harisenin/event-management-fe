import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ErrorPopup } from "./../../components";
import Cookies from "js-cookie";
import { registerUser } from "../../redux/slices/authSlice";



const RegisterForm = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2((prevShowPassword) => !prevShowPassword);
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));


  };




  const handleRegister = async (e) => {
    e.preventDefault();

    try {




      if (formData.password != formData.confirmPassword){
        alert('password and confirm password do not match!.');
      }
      else {
        const result = await dispatch(registerUser(formData));


        if (result.payload) {
          const tokens = result.payload.tokens;
          Cookies.set("user", JSON.stringify(result.payload.user));
          alert('your account has been successfully created!.');

          navigate("/login");
        } else {
          setError(result.error?.message);
        }
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
      <h2 className="text-2xl mb-4 font-bold">Create an account</h2>
      <form className="w-full max-w-md sm:w-[300px] md:w-[350px]"
      onSubmit={handleRegister}
      >
        <div className="form-control mb-6">
          <label className="label ">
            <span className="label-text ">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="input input-bordered input-warning w-full hover:border-orange-300 hover:border-2 transition duration-200 ease-in-out"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-control mb-6">
          <label className="label ">
            <span className="label-text ">Email Address</span>
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
        <div className="form-control mb-6 relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password must be at least 8 characters"
            className="input input-bordered input-warning w-full hover:border-orange-300 hover:border-2 transition duration-200 ease-in-out"
            value={formData.password}
            onChange={handleChange}
            autoComplete="off"

          />

          {/* Eye icon to toggle password visibility */}
          <div
            className="absolute mt-[52px] text-slate-500 right-4 transform cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
          </div>
        </div>
        <div className="form-control mb-6 relative">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type={showPassword2 ? "text" : "password"}
            placeholder="Password must be at least 8 characters"
            className="input input-bordered input-warning w-full hover:border-orange-300 hover:border-2 transition duration-200 ease-in-out"
            autoComplete="off"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}

          />
          <div
            className="absolute mt-[52px] text-slate-500 right-4 transform cursor-pointer"
            onClick={togglePasswordVisibility2}
          >
            {showPassword2 ? <RiEyeOffFill /> : <RiEyeFill />}
          </div>

        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 w-full rounded-md transition duration-200 ease-in-out"
          >
            Register
          </button>
        </div>
        <div className="form-control">
          <Link
            to="/login"
            className="label text-sm text-blue-500 hover:text-blue-600 hover:underline"
          >
            Already Have an Account?
          </Link>
        </div>
        {error && <ErrorPopup message={error} onClose={closeErrorPopup} />}
      </form>
    </div>
  );
};

export default RegisterForm;
