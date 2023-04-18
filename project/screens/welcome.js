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
import img from '../assets/images/welcome.png';
import CustomButton from '../components/customButton';
const welcome = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const handleSignin = () => {
    navigation.navigate('SignIn');
  };
  const handleSignup = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <Image source={img} resizeMode='contain' style={styles.img}></Image>
      <CustomButton text='Sign up' type='Default' onPress={handleSignup} />
      <CustomButton text='Sign in' type='Default' onPress={handleSignin} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0182B0',
  },
  img: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  title: {
    fontSize: 50,
    justifyContent: 'center',
    marginRight: 10,
  },

  text: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#F8C304',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});
export default welcome;
