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
const welcome = ({navigation}) => {
  const { height } = useWindowDimensions();
  const handleGetStarted = () => {
    navigation.navigate("SignIn");
};
  return (
    <View style={styles.container}>
      <ImageBackground source={img} resizeMode='cover' style={styles.img}>
        <Text style={styles.title}>
          <Text style={styles.span}> welcome The Cozy Library</Text>
        </Text>
        <Text style={styles.text}>
          A book is a gift you can open again and again
        </Text>
        <CustomButton
          style={{ height: 40, borderColor: 'white', borderWidth: 0.5 }}
          onPress={handleGetStarted}/>
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
  },
  text: {
    fontSize: 20,
    color: '#ffff',
    marginLeft: 50,
  },
});
export default welcome;