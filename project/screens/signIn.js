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
import img from '../assets/images/image12.jpg';
import CustomButton from '../components/customButton';
import CustomInput from '../components/customInput';
import auth from '../firebase/fireBase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
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
  const handlegoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log('Done');
        navigation.navigate('Profile');
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={img} resizeMode='cover' style={styles.img}>
        <CustomInput placeholder='Email' value={email} setValue={setEmail} />
        <CustomInput
          placeholder='Password'
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton text='Sign in' onPress={handleSignIn} />
        <CustomButton
          text='Forget Password?'
          type='Link'
          onPress={handleForgetPassWordPress}
        />
        <CustomButton
          text='Sign in With Google'
          onPress={handlegoogle}
          bgColor='#708a81'
        />
        <CustomButton
          text='Don’t have an account? Create one'
          type='Link'
          onPress={handleCreatOnePress}
        />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E6D4CA',
  },
  img: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
