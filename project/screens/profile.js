import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
  ImageBackground,
  style,
} from 'react-native';
//import img from '../assets/images/image5.jpg';
import React from 'react';
import auth from '../firebase/fireBase';
import CustomButton from '../components/customButton';
import { signOut } from 'firebase/auth';

const profile = () => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('Done');
        navigation.navigate('Welcome');
      })
      .catch(error => {
        // An error happened.
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.span}> Welcome {auth.currentUser.email} </Text>
      </Text>
      <CustomButton text='Sign Out' onPress={handleSignOut} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6D4CA',
    justifyContent: 'center',
    padding: 50,
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
    alignItems: 'center',
    marginRight: 10,
  },
  span: {
    color: '#c2956e',
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
export default profile;
// {/* <Text></Text> */}
