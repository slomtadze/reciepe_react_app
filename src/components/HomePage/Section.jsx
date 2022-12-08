import SectionCard from "./SectionCard";
import img from "../../assets/hamburger.jpg";

const Section = () => {
  
  
  
  return (
    <div className="w-screen flex flex-col items-center py-12 rounded bg-gray-100 overflow-x-auto">
      <h1 className="text-4xl mb-12 font-mono font-bold">
        Some Header Content Here
      </h1>
      <div className="w-[90%] flex justify-around">
        <SectionCard img={img} title="Lunch" name="lunch" />
        <SectionCard img={img} title="Lunch" name="lunch" />
        <SectionCard img={img} title="Lunch" name="lunch" />
        <SectionCard img={img} title="Lunch" name="lunch" />
        <SectionCard img={img} title="Lunch" name="lunch" />
      </div>
    </div>
  );
};

export default Section;
