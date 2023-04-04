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
const forgetPassword = () => {
  const { height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={img}
        resizeMode="contain"
        style={[styles.img, { height: height * 0.3 }]}
      >
        <Text style={styles.title}>
          <Text style={styles.span}> Forget Password? </Text>
        </Text>
      </ImageBackground>
      <CustomButton text="Get Started" type="Default" />
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
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#ffff",
    marginLeft: 50,
  },
});
export default forgetPassword;
