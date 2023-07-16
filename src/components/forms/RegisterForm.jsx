import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-2xl mb-4 font-bold">Create an account</h2>
      <form className="w-full max-w-md sm:w-[300px] md:w-[350px]">
        <div className="form-control mb-6">
          <label className="label ">
            <span className="label-text ">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="input input-bordered input-warning w-full hover:border-orange-300 hover:border-2 transition duration-200 ease-in-out"
          />
        </div>
        <div className="form-control mb-6">
          <label className="label ">
            <span className="label-text ">Email Address</span>
          </label>
          <input
            type="email"
            placeholder="example@mail.com"
            className="input input-bordered input-warning w-full hover:border-orange-300 hover:border-2 transition duration-200 ease-in-out"
          />
        </div>
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password must be at least 8 characters"
            className="input input-bordered input-warning w-full hover:border-orange-300 hover:border-2 transition duration-200 ease-in-out"
          />
        </div>
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Password must be at least 8 characters"
            className="input input-bordered input-warning w-full hover:border-orange-300 hover:border-2 transition duration-200 ease-in-out"
          />
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
      </form>
    </div>
  );
};

export default RegisterForm;
