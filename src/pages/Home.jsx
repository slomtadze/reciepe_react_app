import { Fragment, useEffect } from "react";
import Header from "../components/HomePage/Header";
import Section from "../components/HomePage/Section";
import { getRndmNumbers } from "../helpers/getRndmNumbers";
import axios from "axios";

const Home = () => {
  console.log(getRndmNumbers(100, 3));
  console.log(process.env.REACT_APP_API_KEY);

  /* useEffect(() => {
    const options = {
      method: "GET",
      url: "https://tasty.p.rapidapi.com/tags/list",
      headers: {
        "X-RapidAPI-Key": {process.env.REACT_APP_API_KEY},
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        response.data.results.map((item) => {
          console.log(item.display_name);
        });
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []); */

  return (
    <Fragment>
      <Header />
      <Section />
    </Fragment>
  );
};

export default Home;
