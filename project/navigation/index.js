import { View, Text , SafeAreaView , StyleSheet} from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from "../screens/welcome";
import ForgetPassword from '../screens/forgetPassword';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import Profile from '../screens/profile'

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style = {styles.root}>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Welcome" component={Welcome}/>
      <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
      <Stack.Screen name="SignIn" component={SignIn}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
      <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>
    </SafeAreaView>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  root:{
    flex:1,
  }

});

export default index