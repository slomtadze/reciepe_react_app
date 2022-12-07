

const SectionCard = ({img, title, name}) => {
  return (
    <div className="flex flex-col items-center bg-white w-1/3 p-4 m-1 rounded">
      <img src={img} alt="appetaizers" className="h-52 w-52 rounded-full" />
      <div className="flex flex-col items-center py-4 ">
        <h2 className="text-2xl font-mono font-bold text-black/70 italic mb-2">
          {title}
        </h2>
        <p className="text-sm ">Some Paragraph</p>
      </div>
      <button className="border-[1px] border-yellow-300 px-8 py-2 rounded-full">
        Submit
      </button>
    </div>
  );
};

export default SectionCard;
