import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  useWindowDimensions,
  ImageBackground,
  style,
} from "react-native";
import React from "react";
import img from "../assets/images/image12.jpg";
import CustomButton from "../components/customButton";
import CustomInput from "../components/customInput";
import {auth} from "../firebase/fireBase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const isValidObjectForm = (obj) => {
  return Object.values(obj).every(value => value.trim())
}

const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater('')
  }, 2500);
}

const isValidEmail = (value) =>{
  const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return regx.test(value)
}

const signIn = ({ navigation }) => {
  const { height } = useWindowDimensions();

  const [userInfo, setUserInfo] = useState({
    email: '',
    password:'',
  })

  const [error, setError] = useState('')

  const {email, password} = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName] : value})
  }

  const isValidForm = () => {
    if(!isValidObjectForm(userInfo)) return updateError('Required all fields!', setError);
    // only valid email id is allowed
    if(!isValidEmail(email)) return updateError('Invalid email!', setError);
    //password must have 8 or more characters
    if(!password.trim() || password.length < 8) 
    return updateError('Password is too short!', setError);
    else
      handleSignIn();

    return true;
  }


  // navigation to forgetPassword page
  const handleForgetPassWordPress = () => {
    navigation.navigate("ForgetPassword");
  };

  // navigation to signUP page
  const handleCreateOnePress = () => {
    navigation.navigate("SignUp");
  };

  // handleSignIn
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Done");
        navigation.navigate("Profile");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // Google Authentication
  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log("Done");
        navigation.navigate("Profile");
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
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
      <ImageBackground source={img} resizeMode="cover" style={styles.img}>
      {error ? 
      <Text style={{color: 'red', fontSize:20 ,textAlign: 'center' }} > 
        {error} 
      </Text>: null}
      <View style={styles.textInput}>
      <TextInput 
        style={styles.input}
        placeholder='Email' 
        value={email} 
        onChangeText={value => handleOnChangeText(value,'email')}
        />
      </View>
      <View style={styles.textInput}>
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={value => handleOnChangeText(value,'password')}
        secureTextEntry={true}
      />
      </View>

        <CustomButton text="Sign in" onPress={isValidForm} />
        <CustomButton
          text="Forget Password?"
          type="Link"
          onPress={handleForgetPassWordPress}
        />
        <CustomButton
          text="Sign in With Google"
          onPress={handleGoogle}
          bgColor="#708a81"
        />
        <CustomButton
          text="Don’t have an account? Create one"
          type="Link"
          onPress={handleCreateOnePress}
        />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E6D4CA",
  },
  img: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    justifyContent: "center",
    marginRight: 10,
  },

  text: {
    fontSize: 20,
    color: "#ffff",
    marginLeft: 50,
  },

  textInput:{
    backgroundColor: '#ffff',
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
export default signIn;

