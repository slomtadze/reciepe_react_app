import SectionCard from "./SectionCard";
import img from "../../assets/hamburger.jpg";

const Section = () => {
  return (
    <div className="bg-white w-screen flex px-40 py-24 rounded">
      <SectionCard img={img} title="Lunch" name="lunch" />
    </div>
  );
};

export default Section;
