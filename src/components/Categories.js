import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Categories = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsParent}>
        <TouchableOpacity>
          <Entypo name="drink" style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="cutlery" style={styles.icons} />
        </TouchableOpacity>
      </View>
      <View style={styles.iconsParent}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="food" style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity>
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
});

export default Categories;
