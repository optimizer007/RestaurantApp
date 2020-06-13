import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  // A hook is a function that add a new function to a functional component
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults("");
  console.log(results);
  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        //shorting function since it is a reference call
        onTermSubmit={() => searchApi(term)}
      />
      <Categories />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>we have found {results.length} results</Text>
      <ResultsList results={filterResultsByPrice("$")} title="Cost Effect" />
      <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice("$$$")} title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
