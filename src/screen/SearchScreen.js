import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  // navigation was earlier passed as a prop from App=>Search=>ResultList
  //the above sheeparding of prop is

  // A hook is a function that add a new function to a functional component
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults("");

  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };
  return (
    //alternatively we can wrap the container with an empty element tag <>...</>
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        //shorting function since it is a reference call
        onTermSubmit={() => searchApi(term)}
      />
      <ScrollView>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Categories onTap={(item) => searchApi(item)} />
        <ResultsList results={filterResultsByPrice("$")} title="Cost Effect" />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    marginLeft: 15,
  },
});
export default SearchScreen;
