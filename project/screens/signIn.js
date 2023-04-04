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
import img from '../assets/images/image3.jpg';
import CustomButton from '../components/customButton';
import CustomInput from '../components/customInput';
import auth from '../firebase/fireBase';
import { signInWithEmailAndPassword } from 'firebase/auth';
const signIn = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleForgetPassWordPress = () => {
    navigation.navigate('ForgetPassword');
  };
  const handleCreatOnePress = () => {
    navigation.navigate('SignUp');
  };
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log('Done');
        navigation.navigate('Profile');
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={img}
        resizeMode='contain'
        style={styles.img}
      ></ImageBackground>
      <CustomInput placeholder='Email' value={email} setValue={setEmail} />
      <CustomInput
        placeholder='Password'
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton text='Sign in' type='Default' onPress={handleSignIn} />
      <CustomButton
        text='Forget Password?'
        type='Link'
        onPress={handleForgetPassWordPress}
      />
      <CustomButton
        text='Sign in With Google'
        type='Default'
        bgColor='#708a81'
      />
      <CustomButton
        text='Don’t have an account? Create one'
        type='Link'
        onPress={handleCreatOnePress}
      />
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
export default signIn;
