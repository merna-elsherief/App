import { View, Text, StyleSheet } from 'react-native';
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
    <View>
      <Text>Welcome {auth.currentUser.email}</Text>
      <CustomButton text='Sign Out' onPress={handleSignOut} />
    </View>
  );
};

export default profile;
