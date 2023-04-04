import {
  Text,
  TextInput,
  View,
  StyleSheet,
  paddingHorizontal,
  placeholder,
} from 'react-native';
import React from 'react';
const customInput = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5d1b8',
    width: '100%',
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 999,
    
  },
  input: {
    height: '100%',
    fontSize: 20,
  },
});
export default customInput;
