import img from "../../assets/christmas.jpg";

const Details = () => {
  return (
    <div>
      <div>
        <img src={img} className="w-2/3 h-auto" />
      </div>
      <div className="flex my-4">
        <img src={img} className="w-1/6 h-auto mr-2" />
        <img src={img} className="w-1/6 h-auto mr-2" />
        <img src={img} className="w-1/6 h-auto mr-2" />
      </div>
      <div>
        <div>
          <div>
            <h1>Prep Time:</h1>
            <h3>10 mins</h3>
          </div>
        </div>
        <div>
          <div>
            <h1>
              Nutrition Facts <span>(per serving)</span>
            </h1>
            <div>
              <h1>432</h1>
              <p>Calories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
