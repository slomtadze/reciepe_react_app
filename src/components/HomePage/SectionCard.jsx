const SectionCard = ({ img, title, name }) => {
  return (
    <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl m-1 w-[200px]">
      <div className="bg-[url('https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/414622.jpg')] w-[150px] h-[150px] bg-cover bg-center rounded-full" />
      {/* <img src={img} alt="appetaizers" className="h-56 w-56 rounded-full" /> */}
      <div className="flex flex-col items-center py-2 ">
        <h2 className="text-2xl font-mono font-bold text-black/70 italic mb-1">
          {title}
        </h2>
        <p className="text-sm ">Some Paragraph</p>
      </div>
      <button className="border-[1px] border-yellow-300 px-8 py-2 rounded-full">
        View Details
      </button>
    </div>
  );
};

export default SectionCard;
