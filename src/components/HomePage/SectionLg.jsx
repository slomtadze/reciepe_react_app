import useHttp from "../../hooks/use-Http";
import SectionWrapper from "../../Layout/SectionWrapper";
import SectionLgCard from "./SectionLgCard";

const SectionLg = () => {
  return (
    <SectionWrapper title="Explore Cuisine of all around World">
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 bg-italian-img bg-cover bg-center"></div>
        <div className="w-full grid grid-rows-3 gap-4">
          <SectionLgCard imgUrl="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/414312.jpg" />
          <SectionLgCard imgUrl="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/414312.jpg" />
          <SectionLgCard imgUrl="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/414312.jpg" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SectionLg;
