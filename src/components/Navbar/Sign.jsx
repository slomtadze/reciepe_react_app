import Button from "./Button";
import { MdOutlineLogin } from "react-icons/md";
import Modal from "../../Layout/Modal";
import { IoLogOutOutline } from "react-icons/io";
import { MdOutlineAppRegistration } from "react-icons/md";
import AuthenticationCard from "../AuthenticationCard";
import { useState } from "react";

const Sign = () => {
  const [authIsShown, setAuthIsShown] = useState(false);
  const [logInIsClicked, setLogInIsClicked] = useState(false);

  const logInHandler = () => {
    setAuthIsShown(true);
    setLogInIsClicked(true);
  };

  const signUpHandler = () => {
    setAuthIsShown(true);
  };

  return (
    <div className="w-20 flex justify-between items-center text-4xl text-white h-full">
      <Button
        icon={<MdOutlineLogin />}
        note="Sign In"
        path="singIn"
        onClick={logInHandler}
      />
      <Button
        icon={<MdOutlineAppRegistration />}
        note="Sign Up"
        path="signUp"
        onClick={signUpHandler}
      />
      {authIsShown ? (
        <Modal>
          <AuthenticationCard
            logInIsClicked={logInIsClicked}
            setAuthIsShown={setAuthIsShown}
            setLogInIsClicked={setLogInIsClicked}
          />
        </Modal>
      ) : null}
    </div>
  );
};

export default Sign;
