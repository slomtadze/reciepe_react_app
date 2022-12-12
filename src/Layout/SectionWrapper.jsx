import useHttp from "../hooks/use-Http";

const SectionWrapper = ({ children, title }) => {
  return (
    <div className="w-full px-16 py-4">
      <h1 className="text-center text-4xl font-mono font-bold mb-16">
        {title}
      </h1>
      {children}
    </div>
  );
};

export default SectionWrapper;
