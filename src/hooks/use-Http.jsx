import axios from "axios";
import { useEffect, useState } from "react";

const useHttp = (urlPath, params) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const options = {
    method: "GET",
    url: `https://tasty.p.rapidapi.com/${urlPath}`,
    params: { params },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RECIEPE_REACT_APP_API_KEY,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  const getData = async () => {
    try {
      const response = await axios.request(options);
      setData(response.data.results);
    } catch (error) {
      if (error.response) {
        // Request made but the server responded with an error
        console.log(error.message);
      } else if (error.request) {
        // Request made but no response is received from the server.
        console.log(error.message);
      } else {
        // Error occured while setting up the request
        console.log("Bad Request");
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
  };
};

export default useHttp;
