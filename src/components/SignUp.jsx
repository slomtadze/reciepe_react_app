const SignUp = ({ setLogInIsActive }) => {
  const switchSignHandler = () => {
    setLogInIsActive((prev) => !prev);
  };

  return (
    <div className="w-full px-4 py-8">
      <h1 className="text-center text-2xl mb-8">Sign Up</h1>
      <form className="flex flex-col mb-4 relative">
        <input
          className="py-[1px] mb-8 bg-transparent border-b border-b-black/50 outline-none text-gray-500"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          className="py-[1px] mb-8 bg-transparent border-b border-b-black/50 outline-none text-gray-500 "
          type="password"
          placeholder="Password"
          name="password"
        />
        <input
          className="py-[1px] mb-12 bg-transparent border-b border-b-black/50 outline-none text-gray-500 "
          type="password"
          placeholder="Password"
          name="password"
        />
        <div className="flex ">
          <button
            className="bg-emerald-600 py-[0.3em] px-[1em] rounded-lg mr-2 hover:bg-emerald-500 duration-150"
            type="submit"
          >
            Register
          </button>
          <button
            className="bg-emerald-600 py-[0.3em] px-[1em] rounded-lg hover:bg-emerald-500 duration-150"
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>

      <p>
        Have an account?{" "}
        <span
          className="cursor-pointer hover:text-slate-500"
          onClick={switchSignHandler}
        >
          Sign In
        </span>{" "}
        here
      </p>
    </div>
  );
};

export default SignUp;
