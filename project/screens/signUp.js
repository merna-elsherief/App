import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
  ImageBackground,
  style,
} from "react-native";
import React from "react";
import img from "../assets/images/image3.jpg";
import CustomButton from "../components/customButton";
import CustomInput from "../components/customInput";
const signUp = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const handleSignUp = () => {
    console.log("Done");
  };
  const handleForgetPasswordPress=()=>{
    navigation.navigate("ForgetPassword");
  }

  const handleSignInPress=()=>{
    navigation.navigate("SignIn");  
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create An Account</Text>
      <CustomInput placeholder="Name" />
      <CustomInput placeholder="Email" />
      <CustomInput placeholder="Password" />
      <CustomButton text="Sign Up" onPress={handleSignUp} />
      <CustomButton text="Forget Password?" type="Link" onPress={handleForgetPasswordPress}/>
      <CustomButton text="Sign Up With Google" bgColor="#708a81" />
      <CustomButton text="Sign In" type="Link" onPress={handleSignInPress} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  img: {
    flex: 0.7,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    marginBottom: 20,
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
});
export default signUp;
