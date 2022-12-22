import { useState } from "react";
import img from "../assets/christmas.jpg";
import SingIn from "./SignIn";
import SignUp from "./SignUp";

const AuthenticationCard = () => {
  const [logInIsActive, setLogInIsActive] = useState(false);
  return (
    <div className="grid grid-cols-2 gap-8 h-full w-full bg-slate-300 rounded-lg">
      {logInIsActive ? (
        <SingIn setLogInIsActive={setLogInIsActive} />
      ) : (
        <div className="bg-mexican-img bg-center bg-cover"></div>
      )}
      {logInIsActive ? (
        <div className="bg-mexican-img bg-center bg-cover"></div>
      ) : (
        <SignUp setLogInIsActive={setLogInIsActive} />
      )}
    </div>
  );
};

export default AuthenticationCard;
