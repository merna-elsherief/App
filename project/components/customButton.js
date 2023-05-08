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
  containerButton: {
    width: '60%',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c2956e',
    marginTop: 30,
    borderRadius: 0,
    height: 50,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  containerLink: {
    backgroundColor: 'transparent',
  },
  containerDefault: {
    width: '25%',
    backgroundColor: '#c2956e',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },

  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  textLink: {
    fontSize: 15,
    color: '#2b2129',
  },
  containercheckout: {
    width: '90%',
    backgroundColor: '#c2956e',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  
});
export default customButton;
