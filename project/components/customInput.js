import {
  Text,
  TextInput,
  View,
  StyleSheet,
  paddingHorizontal,
  placeholder,
} from 'react-native';
import React from 'react';
const customInput = ({ placeholder, value, setValue, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: '100%',
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 2,
    borderRadius: 999,
  },
  input: {
    height: '100%',
    fontSize: 20,
  },
});
export default customInput;
