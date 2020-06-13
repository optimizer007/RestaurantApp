import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image, Button } from "react-native";
import yelp from "../api/yelp";
import { Foundation, Entypo } from "@expo/vector-icons";
import { add } from "react-native-reanimated";

const ResultsShowScreen = ({ navigation }) => {
  const [results, setResult] = useState(null);
  //to be able to show information from parent ResultList we use object destructuring along with the keys from object passed in
  const id = navigation.getParam("id");

  //request to yelp api
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  //because we want it to renderOnly once
  useEffect(() => {
    getResult(id);
  }, []);
  if (!results) {
    return null;
  }
  return (
    <>
      <Text style={styles.name}>{results.name}</Text>
      <Image style={styles.mainImage} source={{ uri: results.image_url }} />
      <View style={styles.contact}>
        <Foundation name="telephone" style={styles.icon} />
        <Text style={styles.contactText}>{results.phone}</Text>
      </View>
      <View style={styles.contact}>
        <Entypo name="location-pin" style={styles.icon} />
      </View>
      <View></View>
      <Text style={styles.text}>More Images</Text>
      <FlatList
        data={results.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  mainImage: {
    height: 200,
    width: 365,
    borderRadius: 5,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 2.5,
    alignSelf: "center",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "italic",
    alignSelf: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4d4d4d",
    marginTop: 10,
    marginBottom: 10,
  },
  contact: {
    flexDirection: "row",
    marginLeft: 15,
  },
  contactText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4d4d4d",
  },
  icon: {
    marginRight: 10,
    fontSize: 30,
  },
});

export default ResultsShowScreen;
