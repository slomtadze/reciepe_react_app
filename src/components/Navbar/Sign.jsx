import Button from "./Button";
import { MdOutlineLogin } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io";
import { MdOutlineAppRegistration } from "react-icons/md";

const Sign = () => {
  return (
    <div className="w-20 flex justify-between items-center text-4xl text-white/80 h-full">
      <Button icon={<MdOutlineLogin />} note="Sign In" />
      <Button icon={<MdOutlineAppRegistration />} note="Sign Up" />
    </div>
  );
};

export default Sign;
