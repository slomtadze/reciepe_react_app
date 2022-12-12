import Header from "../components/HomePage/Header";
import Section from "../components/HomePage/Section";
import SectionLg from "../components/HomePage/SectionLg";
import SectionList from "../components/HomePage/SectionList";

const Home = () => {
  /* const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: { from: "0", size: "5", tags: "appetizers" },
    headers: {
      "X-RapidAPI-Key": "b734d6112dmshdde1c05c35e21b1p169d69jsn94b6de653a1a",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    }); */
  return (
    <div className="w-screen">
      <Header />
      <Section
        urlPath="recipes/list"
        params={{ from: "0", size: "5", tags: "best_of_tasty" }}
        header="Best Of Tasty"
      />
      <SectionList />
      <SectionLg />
      <Section
        urlPath="recipes/list"
        params={{ from: "0", size: "5", tags: "under_30_minutes" }}
        header="Under 30 Minutes"
      />
    </div>
  );
};

export default Home;
