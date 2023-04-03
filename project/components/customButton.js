import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const customButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Get Started</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    top: 20,
    backgroundColor: "black",

    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
});
export default customButton;
