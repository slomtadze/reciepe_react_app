const SingIn = ({ setLogInIsActive, setAuthIsShown, setLogInIsClicked }) => {
  const switchSignHandler = () => {
    setLogInIsActive((prev) => !prev);
  };

  const hideAuthHandler = () => {
    setAuthIsShown(false);
    setLogInIsClicked(false);
  };
  return (
    <div className="w-full px-20 py-16 animate-in fade-in-0 duration-300">
      <h1 className="text-center text-2xl mb-8">Sign In</h1>
      <form className="flex flex-col mb-4 relative">
        <input
          className="py-[1px] mb-8 bg-transparent border-b border-b-black/50 outline-none text-gray-500"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          className="py-[1px] mb-12 bg-transparent border-b border-b-black/50 outline-none text-gray-500 "
          type="password"
          placeholder="Password"
          name="password"
        />
        <p className="absolute text-sm font-mono hover:text-slate-500 cursor-pointer max-w-fit right-0 bottom-14">
          Forgot Password?
        </p>
        <div className="flex ">
          <button
            className="bg-emerald-600 py-[0.3em] px-[1em] rounded-lg mr-2 hover:bg-emerald-500 duration-150"
            type="submit"
          >
            Log In
          </button>
          <button
            className="bg-emerald-600 py-[0.3em] px-[1em] rounded-lg hover:bg-emerald-500 duration-150"
            type="button"
            onClick={hideAuthHandler}
          >
            Cancel
          </button>
        </div>
      </form>

      <p>
        Have not account yet?{" "}
        <span
          className="cursor-pointer hover:text-slate-500"
          onClick={switchSignHandler}
        >
          Sign Up
        </span>{" "}
        here
      </p>
    </div>
  );
};

export default SingIn;
