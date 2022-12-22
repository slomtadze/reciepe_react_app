import SingIn from "./SignIn";
import SignUp from "./SignUp";

const AuthenticationCard = () => {
  return (
    <div className="grid grid-cols-2 gap-8 px-8 py-4 bg-slate-300 rounded-lg">
      <SingIn />
      <SignUp />
    </div>
  );
};

export default AuthenticationCard;
