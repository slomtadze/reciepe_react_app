import axios from "axios";
import { useEffect, useState } from "react";

const useHttp = (urlPath, params) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const options = {
    method: "GET",
    url: `https://tasty.p.rapidapi.com/${urlPath}`,
    params: params,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RECIEPE_REACT_APP_API_KEY,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  const getData = async () => {
    try {
      const response = await axios.request(options);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      if (error.response) {
        // Request made but the server responded with an error
        setError(error.message);
      } else if (error.request) {
        // Request made but no response is received from the server.
        setError("There is no Results found");
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
    error,
    isLoading,
  };
};

export default useHttp;
