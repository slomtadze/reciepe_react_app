import { useEffect, useState } from "react";
import img from "../assets/christmas.jpg";
import SingIn from "./SignIn";
import SignUp from "./SignUp";

const AuthenticationCard = ({
  logInIsClicked,
  setAuthIsShown,
  setLogInIsClicked,
}) => {
  const [logInIsActive, setLogInIsActive] = useState(false);

  useEffect(() => {
    if (logInIsClicked) {
      setLogInIsActive(true);
    }
  }, []);

  return (
    <div className="grid grid-cols-2 h-full w-full min-h-min bg-slate-300 rounded-lg">
      {logInIsActive ? (
        <SingIn
          setLogInIsActive={setLogInIsActive}
          setAuthIsShown={setAuthIsShown}
          setLogInIsClicked={setLogInIsClicked}
        />
      ) : (
        <div className="bg-mexican-img bg-center bg-cover animate-in slide-in-from-right duration-500 rounded-l-lg"></div>
      )}
      {logInIsActive ? (
        <div className="bg-mexican-img bg-center bg-cover animate-in slide-in-from-left duration-500 max-h-max rounded-r-lg"></div>
      ) : (
        <SignUp
          setLogInIsActive={setLogInIsActive}
          setAuthIsShown={setAuthIsShown}
        />
      )}
    </div>
  );
};

export default AuthenticationCard;
