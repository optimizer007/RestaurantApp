import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(" ");

  const searchApi = async (searchTerm) => {
    //response.data
    try {
      const response = await yelp.get("/search", {
        //for
        params: {
          limit: 50,
          //from yelp
          term: searchTerm,
          location: "new york",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };
  //useEffect a react-hook that runs the code just once
  useEffect(() => {
    searchApi("pasta");
  }, []);
  return [searchApi, results, errorMessage];
};
