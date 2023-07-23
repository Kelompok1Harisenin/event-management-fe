const ForgotPasswordForm = () => {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-2xl mb-4 font-bold">Forgot Password?</h2>
      <form className="w-full max-w-md sm:w-[300px] md:w-[350px]">
        <div className="form-control mb-6">
          <label className="label ">
            <span className="label-text ">Your Email Address</span>
          </label>
          <input
            type="email"
            placeholder="example@mail.com"
            className="input input-bordered input-warning w-full hover:border-orange-300 hover:border-2 transition duration-200 ease-in-out"
          />
        </div>
        
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 w-full rounded-md transition duration-200 ease-in-out"
          >
            Send Email Confirmation
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
