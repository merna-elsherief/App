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
import img from '../assets/images/image14.jpg';
import CustomButton from '../components/customButton';
const welcome = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const handleGetStarted = () => {
    navigation.navigate('Home');
  };
  const handleSignin = () => {
    navigation.navigate('SignIn');
  };
  const handleSignup = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={img} resizeMode='cover' style={styles.img}>
        <Text style={styles.title}>
          <Text style={styles.span}> welcome</Text>
        </Text>
        <CustomButton
          text='Get Started'
          type='Default'
          onPress={handleGetStarted}
        />
        <CustomButton text='Sign in' type='Default' onPress={handleSignin} />
        <CustomButton text='Sign up' type='Default' onPress={handleSignup} />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
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
  span: {
    color: '#ffff',
    fontWeight: 'bold',
    justifyContent: 'center',
    padding: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffff',
    marginLeft: 50,
  },
});
export default welcome;
