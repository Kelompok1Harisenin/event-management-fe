import React from "react";

const Register = () => {
  return (
    <div className="max-w-md mx-auto p-8">
      <h2 className="text-2xl mb-4 font-semibold">Create an account</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-lg">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 w-full rounded-md"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
