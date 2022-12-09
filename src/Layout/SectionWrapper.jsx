import useHttp from "../hooks/use-Http";

const SectionWrapper = ({ children, title }) => {
  return (
    <div className="w-full px-8 py-4">
      <h1 className="text-center text-2xl font-mono my-4">{title}</h1>
      {children}
    </div>
  );
};

export default SectionWrapper;
