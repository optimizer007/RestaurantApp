import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ResulstList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        //since it is true you can simple write just horizontal

        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        //renderItem has Couple of properties but the one we care about is the item property
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResulstList;
