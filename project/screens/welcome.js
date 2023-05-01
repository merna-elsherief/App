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
import img from '../assets/images/image6.jpg';
import CustomButton from '../components/customButton';
const welcome = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const handleGetSTarted = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={img} resizeMode='contain' style={styles.img}>
        <Text style={styles.text}>Welcome</Text>
        <CustomButton
          text='Get Started'
          type='Default'
          onPress={handleGetSTarted}
        />
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
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    justifyContent: 'center',
    marginRight: 10,
  },

  text: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});
export default welcome;
