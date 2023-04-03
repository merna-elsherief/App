import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from "../screens/welcome";
import ForgetPassword from '../screens/forgetPassword';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default index