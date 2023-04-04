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
import img from '../assets/images/image.jpg';
import CustomButton from '../components/customButton';
const welcome = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const handleGetStarted=()=>{
    navigation.navigate("SignIn");
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={img} resizeMode='cover' style={styles.img}>
        <Text style={styles.title}>
          <Text style={styles.span}> welcome The Cozy Library</Text>
        </Text>
        <CustomButton text='Get Started' type='Default' onPress={handleGetStarted} />
      </ImageBackground>
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
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    justifyContent: 'center',
    marginRight: 10,
  },
  span: {
    color: '#ffff',
    fontWeight: 'bold',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffff',
    marginLeft: 50,
  },
});
export default welcome;
