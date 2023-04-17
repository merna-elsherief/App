import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import Welcome from '../screens/welcome';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import ForgetPassword from '../screens/forgetPassword';
import Profile from '../screens/profile';
import EditProfileScreen from '../screens/editprofilescreen';
import Home from '../screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const index = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.root}>
        <Stack.Navigator screenOptions={{ headerShown: true }}>
          <Stack.Screen name='Welcome' component={Welcome} />
          <Stack.Screen name='SignIn' component={SignIn} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen
            name='EditProfileScreen'
            component={EditProfileScreen}
          />
          <Stack.Screen name='Home' component={Home} />
          
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default index;
