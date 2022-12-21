const Header = () => {
  return (
    <div className="relative h-screen w-full bg-herro-img bg-cover bg-center m-0">
      <div className="bg-black/30 z-5">
        <div className="flex absolute top-[30%] left-12 text-white text-2xl z-5">
          <div>
            <h1 className="text-4xl font-bold leading-relaxed uppercase font-mono mr-24">
              Looking for something new?
              <br />{" "}
              <span className="text-gray-200 italic">
                We have the perfect recipes
              </span>
            </h1>
            <p className="text-white animate-pulse cursor-pointer hover:text-gray-200">
              Explore More ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
