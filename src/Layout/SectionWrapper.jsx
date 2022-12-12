import useHttp from "../hooks/use-Http";

const SectionWrapper = ({ children, title }) => {
  return (
    <div className="w-full px-16 py-4">
      <h1 className="text-center text-4xl font-bold font-mono mb-16 hover:cursor-pointer hover:text-gray-500 duration-300 ">
        {title?.toUpperCase()}
      </h1>
      {children}
    </div>
  );
};

export default SectionWrapper;
