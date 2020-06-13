import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";
//passing the ResultsDetail the business id is possible because of withNavigation import

const ResulstList = ({ title, results, navigation }) => {
  return (
    <View style={styles.conatainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        //since it is true you can simple write just horizontal

        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        //renderItem has Couple of properties but the one we care about is the item property
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultsShow", {
                  id: item.id,
                })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  conatainer: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
    color: "#4d4d4d",
  },
});

export default withNavigation(ResulstList);
