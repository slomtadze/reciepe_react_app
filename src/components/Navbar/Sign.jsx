import Button from "./Button";
import { MdOutlineLogin } from "react-icons/md";
import Modal from "../../Layout/Modal";
import { IoLogOutOutline } from "react-icons/io";
import { MdOutlineAppRegistration } from "react-icons/md";
import AuthenticationCard from "../AuthenticationCard";

const Sign = () => {
  return (
    <div className="w-20 flex justify-between items-center text-4xl text-white h-full">
      <Button icon={<MdOutlineLogin />} note="Sign In" path="singIn" />
      <Button
        icon={<MdOutlineAppRegistration />}
        note="Sign Up"
        path="signUp"
      />
      <Modal>
        <AuthenticationCard />
      </Modal>
    </div>
  );
};

export default Sign;
