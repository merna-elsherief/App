import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Logo from "../assets/images/img.jpg";
import CustomButton from "../components/customButton";

const welcome = ({navigation}) => {
  const { height } = useWindowDimensions();
  
  const handleGetStarted = () => {
      navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.5 }]}
        resizeMode="contain"
      />
      <Text style={styles.title}>
        welcome <Text style={styles.span}>Kotobna</Text>
      </Text>
      <Text style={styles.text}>new app for your brain cells</Text>
      <CustomButton onPress={handleGetStarted}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
  },
  span: {
    color: "green",
  },
  text: {
    fontSize: 20,
  },
});
export default welcome;
