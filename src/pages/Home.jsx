import Header from "../components/HomePage/Header";
import Section from "../components/HomePage/Section";
import SectionLg from "../components/HomePage/SectionLg";
import SectionList from "../components/HomePage/SectionList";

const Home = () => {
  return (
    <div className="w-screen">
      <Header />
      {/* <Section
        urlPath="recipes/list"
        params={{ from: "0", size: "5", tags: "best_of_tasty" }}
        header="Best Of Tasty"
      /> */}
      <SectionList />
      {/* <Section
        urlPath="recipes/list"
        params={{ from: "0", size: "5", tags: "under_30_minutes" }}
        header="Under 30 Minutes"
      /> */}
      <SectionLg />
    </div>
  );
};

export default Home;
