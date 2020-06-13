import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Categories = ({ onTap }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Search</Text>
      <View style={styles.iconsParent}>
        <TouchableOpacity onPress={() => onTap("drinks")}>
          <Entypo name="drink" style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onTap("pasta")}>
          <FontAwesome name="cutlery" style={styles.icons} />
        </TouchableOpacity>
      </View>
      <View style={styles.iconsParent}>
        <TouchableOpacity onPress={() => onTap("burger")}>
          <MaterialCommunityIcons name="food" style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onTap("beer")}>
          <Ionicons name="md-beer" style={styles.icons} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  iconsParent: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  icons: {
    fontSize: 40,
    color: "#4d4d4d",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
    color: "#4d4d4d",
  },
});

export default Categories;
