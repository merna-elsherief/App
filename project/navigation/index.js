import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import Welcome from '../screens/welcome';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import ForgetPassword from '../screens/forgetPassword';
import Profile from '../screens/profile';
import EditProfileScreen from '../screens/editprofilescreen';
import AddProduct from '../screens/addProduct';
import Home from '../screens/home';
import DetailsScreen from '../screens/DetailsScreen';
import TopBooks from '../screens/TopBooks';
import Books from '../screens/Books';
import Novels from '../screens/Novels';
import Cart from '../screens/Cart';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaymentScreen from '../screens/PaymentScreen';
import cardPayment from '../screens/cardPayment';
import CashPayment from '../screens/cashPayment';

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
          <Stack.Screen name='AddProduct' component={AddProduct} />
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
          <Stack.Screen name='Top Books' component={TopBooks} />
          <Stack.Screen name='Books' component={Books} />
          <Stack.Screen name='Novels' component={Novels} />
          <Stack.Screen name='Cart' component={Cart} />
          <Stack.Screen
            name='EditProfileScreen'
            component={EditProfileScreen}
          />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='PaymentScreen' component={PaymentScreen} />
          <Stack.Screen name='cardPayment'  component={cardPayment} />
          <Stack.Screen name='CashPayment' component={CashPayment} />
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
