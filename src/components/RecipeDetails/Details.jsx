import img from "../../assets/christmas.jpg";

const Details = () => {
  return (
    <div className="rounded">
      <div>
        <img src={img} className="w-full h-auto" />
      </div>
      <div className="flex my-4">
        <img src={img} className="w-1/6 h-auto mr-2" />
        <img src={img} className="w-1/6 h-auto mr-2" />
        <img src={img} className="w-1/6 h-auto mr-2" />
      </div>
      <div className="bg-gray-200 w-full px-8 py-4">
        <div className="border-b-2 border-gray-400 pb-4 grid grid-cols-4 gap-4 min-w-min">
          <div className="">
            <h1 className="font-bold mb-2">Prep Time:</h1>
            <h3>10 mins</h3>
          </div>
          <div className="">
            <h1 className="font-bold mb-2">Prep Time:</h1>
            <h3>10 mins</h3>
          </div>
          <div className="">
            <h1 className="font-bold mb-2">Prep Time:</h1>
            <h3>10 mins</h3>
          </div>
          <div className="">
            <h1 className="font-bold mb-2">Prep Time:</h1>
            <h3>10 mins</h3>
          </div>
        </div>
        <div className="py-4">
          <h1 className="text-2xl font-bold mb-4">
            Nutrition Facts
            <span className="text-sm font-normal italic">(per serving)</span>
          </h1>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <h1 className="font-bold font-mono">432</h1>
              <p>Calories</p>
            </div>
            <div>
              <h1 className="font-bold font-mono">432</h1>
              <p>Calories</p>
            </div>
            <div>
              <h1 className="font-bold font-mono">432</h1>
              <p>Calories</p>
            </div>
            <div>
              <h1 className="font-bold font-mono">432</h1>
              <p>Calories</p>
            </div>
            <div>
              <h1 className="font-bold font-mono">432</h1>
              <p>Calories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
