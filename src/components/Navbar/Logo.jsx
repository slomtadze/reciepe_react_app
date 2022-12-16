import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <h1
      className="text-4xl italic font-bold cursor-pointer hover:text-white/80 duration-300"
      onClick={() => navigate("/")}
    >
      Foodie<span className="text-red-700">.</span>bySaba
    </h1>
  );
};
export default Logo;
