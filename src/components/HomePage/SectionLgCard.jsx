const SectionLgCard = ({ imgUrl }) => {
  const bgImg = imgUrl;

  const backgroundIMG = {
    backgroundImage: `url("${bgImg}")`,
    backgroundSize: "cover",
    backgroundPositioc: "center",
  };

  return (
    <div className="border-2 ">
      <div style={backgroundIMG} className="h-[150px]"></div>
      <p>Some content Text here</p>
    </div>
  );
};

export default SectionLgCard;
