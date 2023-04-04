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
    width: '80%',
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#c2956e',
    marginTop: 15,

    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  containerLink: {
    backgroundColor: 'white',
  },
  containerDefault: {
    width: '80%',
    padding: 15,
    marginVertical: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#c2956e',
    marginLeft: 40,
    marginTop: 60,
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
