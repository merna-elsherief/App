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
import img from '../assets/images/image3.jpg';
import CustomButton from '../components/customButton';
import CustomInput from '../components/customInput';
const signIn = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const handleForgetPassWordPress=()=>{
    navigation.navigate("ForgetPassword");
  }
  const handleCreatOnePress = () =>{
    navigation.navigate("SignUp");
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={img}
        resizeMode='contain'
        style={styles.img}
      ></ImageBackground>
      <CustomInput placeholder='Email' />
      <CustomInput placeholder='Password' />
      <CustomButton text='Sign in' />
      <CustomButton text='Forget Password?' type='Link' onPress={handleForgetPassWordPress}/>
      <CustomButton text='Sign in With Google' bgColor='#708a81' />
      <CustomButton text='Don’t have an account? Create one' type='Link' onPress={handleCreatOnePress}/>
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
    flex: 0.7,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    marginBottom: 20,
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
