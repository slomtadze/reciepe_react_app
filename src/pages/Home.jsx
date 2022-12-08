import { Fragment, useEffect } from "react";
import Header from "../components/HomePage/Header";
import Section from "../components/HomePage/Section";
import useHttp from "../hooks/use-Http";
import { getRndmNumbers } from "../helpers/getRndmNumbers";
import axios from "axios";

const Home = () => {
  const data = useHttp("tags/list");
  console.log(data);

  /*  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://tasty.p.rapidapi.com/tags/list",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RECIEPE_REACT_APP_API_KEY,
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const set = new Set();
        const tempArr = [];
        response.data.results.forEach((item) => {
          set.add(item.name);
        });
        const array = Array.from(set);
        console.log(array);
        //console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []); */

  return (
    <div className="w-screen">
      <Header />
      <Section />
    </div>
  );
};

export default Home;
