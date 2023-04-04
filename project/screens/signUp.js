import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
  ImageBackground,
  style,
} from 'react-native';
import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import img from '../assets/images/image3.jpg';
import CustomButton from '../components/customButton';
import CustomInput from '../components/customInput';
import auth from '../firebase/fireBase';
const signUp = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        console.log('Done');
        const user = userCredential.user;
        navigation.navigate('SignIn');

        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create An Account</Text>
      <CustomInput placeholder='Name' value={name} setValue={setName} />
      <CustomInput placeholder='Email' value={email} setValue={setEmail} />
      <CustomInput
        placeholder='Password'
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton text='Sign up' onPress={handleSignUp} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  img: {
    flex: 0.7,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 50,
    justifyContent: 'center',
    marginRight: 10,
  },

  text: {
    fontSize: 20,
    color: '#ffff',
    marginLeft: 50,
  },
});
export default signUp;
