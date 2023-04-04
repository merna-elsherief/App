import { useState } from "react";
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
import img from "../assets/images/image.jpg";
import CustomButton from "../components/customButton";
import CustomInput from "../components/customInput";
const forgetPassword = () => {
  const { height } = useWindowDimensions();
  const [Email, setEmail] = useState("");
  const handleForgetPassword = () => {
    console.log("Done");
  };
  return (
    <View style={styles.container}>
      <Image
        source={img}
        resizeMode="contain"
        style={[styles.img, { height: height * 0.3 }]}
      />
      <Text style={styles.title}>
        <Text style={styles.span}> Forget Password? </Text>
      </Text>
      <CustomInput placeholder={"email"} value={Email} setValue={setEmail} />
      <CustomButton
        text="Send Link"
        type="Defualt"
        onPress={handleForgetPassword}
      />
      <CustomButton text="Back to sign in" type="Link" />
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
    width: "100%",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    justifyContent: "center",
    marginRight: 10,
  },
  span: {
    color: "#ffff",
    fontWeight: "bold",
    color: "Black",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#ffff",
    marginLeft: 50,
  },
});
export default forgetPassword;
