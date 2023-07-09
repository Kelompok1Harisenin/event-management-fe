const Login = () => {
  return (
  <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-2xl mb-4 font-bold">Log In</h2>
      <form className="w-full max-w-md sm:w-[300px] md:w-[350px]">
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input
            type="email"
            placeholder="Email Address"
            className="input input-info input-bordered hover:border-cyan-400 hover:border-4"
          />
        </div>
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-info input-bordered hover:border-cyan-400 hover:border-4"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 w-full rounded-md transition duration-200 ease-in-out"
          >
            Log In
          </button>
        </div>

        <div className="flex-col text-sm mt-2 ">
          <div ><button>Forgotten Account?</button></div>
          <div>Or</div>
          <div><button>Create New Account</button></div>

          

        </div>
        
      </form>
    </div>
  )
};

export default Login;
