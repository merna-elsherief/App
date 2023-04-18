import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const customButton = ({
  text,
  type = 'Button',
  bgColor,
  txtColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles[`container${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          styles[`text${type}`],
          txtColor ? { color: txtColor } : {},
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#04558A',
    marginTop: 5,
    borderRadius: 25,

    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  containerLink: {
    backgroundColor: 'white',
  },
  containerDefault: {
    width: '90%',
    backgroundColor: '#F8C304',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10,
  },

  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  textLink: {
    fontSize: 15,
    color: '#2b2129',
  },
});
export default customButton;
