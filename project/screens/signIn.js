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
  span,
  TouchableOpacity,
} from "react-native";
import React from "react";
import img from "../assets/images/image12.jpg";
import CustomButton from "../components/customButton";
import CustomInput from "../components/customInput";
import { auth } from "../firebase/fireBase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import GoogleButton from "react-google-button";
import { Container } from "@mui/material";
import { RFValue } from "react-native-responsive-fontsize";

const isValidObjectForm = (obj) => {
  return Object.values(obj).every((value) => value.trim());
};

const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater("");
  }, 2500);
};

const isValidEmail = (value) => {
  const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return regx.test(value);
};

const signIn = ({ navigation }) => {
  const { height } = useWindowDimensions();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [errorCode, setErrorCode] = useState("");

  const { email, password } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjectForm(userInfo))
      return updateError("Required all fields!", setError);
    // only valid email id is allowed
    if (!isValidEmail(email)) return updateError("Invalid email!", setError);
    //password must have 8 or more characters
    if (!password.trim() || password.length < 8)
      return updateError("Password is too short!", setError);
    else handleSignIn();

    return true;
  };

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
        navigation.navigate("Home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        window.alert(errorMessage);
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
      <Text style={styles.title}>Sign in</Text>
      {error ? (
        <Text style={{ color: "red", fontSize: 20, textAlign: "center" }}>
          {error}
        </Text>
      ) : null}

      <View style={styles.textInput}>
        <EmailIcon style={styles.icon}></EmailIcon>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(value) => handleOnChangeText(value, "email")}
        />
      </View>
      <View style={styles.textInput}>
        <LockIcon style={styles.icon}></LockIcon>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(value) => handleOnChangeText(value, "password")}
          secureTextEntry={true}
        />
      </View>
      <View>
        <TouchableOpacity>
          <Text
            style={styles.textLink}
            type="Link"
            onPress={handleForgetPassWordPress}
          >
            Forget Password?
          </Text>
        </TouchableOpacity>
      </View>
      <CustomButton text="Sign in" onPress={isValidForm} />
      <GoogleButton
        style={styles.socialIcon}
        type="light" // can be light or dark
        onClick={() => {
          handleGoogle();
        }}
      />
      <TouchableOpacity>
        <Text style={styles.Link} type="Link" onPress={handleCreateOnePress}>
          Not registered? Create an account!
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E6D4CA",
    paddingTop: 150,
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
    // justifyContent: "center",
    marginRight: 10,
    paddingBottom: 40,
  },
  text: {
    fontSize: 20,
    color: "#ffff",
    marginLeft: 50,
  },

  textInput: {
    backgroundColor: "#ffff",
    width: "60%",
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 4,
    borderColor: "white",
    flexDirection: "row",
  },

  input: {
    height: "100%",
    fontSize: 20,
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },

  icon: {
    paddingLeft: 3,
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 10,
  },
  socialIcon: {
    width: "60%",
    marginTop: 10,
  },
  textLink: {
    // fontWeight:'bold',
    fontSize: 18,
    color: "#2b2129",
  },
  Link: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#2b2129",
    paddingTop: 10,
  },
});
export default signIn;
