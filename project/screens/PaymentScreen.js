// import React, { useState } from 'react';
// import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { db } from "../firebase/fireBase";
// import { collection, addDoc} from "firebase/firestore";
// import stripe from 'stripe';


// export default function CheckoutScreen({navigation}) {
  
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [zipCode, setZipCode] = useState('');
//   const [cardNumber, setCardNumber] = useState('');
//   const [expirationDate, setExpirationDate] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handlePlaceOrder = async () => {
//     // Validate input fields
//     if (!name) {
//       setErrorMessage('Please enter your name');
//       return;
//     }
  
//     if (!address) {
//       setErrorMessage('Please enter your address');
//       return;
//     }
  
//     if (!city) {
//       setErrorMessage('Please enter your city');
//       return;
//     }
  
//     if (!zipCode) {
//       setErrorMessage('Please enter your zip code');
//       return;
//     }
  
//     if (!/^\d{5}(?:[-\s]\d{4})?$/.test(zipCode)) {
//       setErrorMessage('Please enter a valid zip code');
//       return;
//     }
  
//     if (!cardNumber) {
//       setErrorMessage('Please enter your card number');
//       return;
//     }
  
//     if (!/^\d{16}$/.test(cardNumber)) {
//       setErrorMessage('Please enter a valid card number');
//       return;
//     }
  
//     if (!expirationDate) {
//       setErrorMessage('Please enter your expiration date');
//       return;
//     }
  
//     if (!/^([0-9]{2})\/([0-9]{2})$/.test(expirationDate)) {
//       setErrorMessage('Please enter a valid expiration date (MM/YY)');
//       return;
//     }
  
//     if (!cvv) {
//       setErrorMessage('Please enter your CVV');
//       return;
//     }
  
//     if (!/^\d{3,4}$/.test(cvv)) {
//       setErrorMessage('Please enter a valid CVV');
//       return;
//     }
//      const clientSecret = await createPaymentIntent(2000);
//      addOrderToDataBase();
//     // Perform order placement logic here
//     console.log('Placing order...');
//     console.log('Payment successful!', 'Your payment was processed successfully.')
//     // window.alert("Payment successful!', 'Your payment was processed successfully.")
//     navigation.navigate("Home");
//   };


//   const createPaymentIntent = async () => {
//     try {
//     const stripe = require('stripe')('sk_test_51N5DinHn5xWRVXRwO1VCRj66quaowY4InB0rpNmdZU0BxnWNXbqXuvUSl4vKHAWFylZWaaXtmJSySRD5ZnLLF6AN00QIwzx6Wn');
  
//     const amount = 1000;
  
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: 'usd',
//     });
//     window.alert("Payment successful!', 'Your payment was processed successfully.");
//     return paymentIntent.client_secret;
//   } catch (error) {
//     console.log(error);
//     window.alert('Payment failed. Please try again later.');
//   }
  
//   };


//   const addOrderToDataBase = async () => {
//     try {
//       const docRef = await addDoc(collection(db, "orders"), {
//         name: name,
//         address: address,
//         city: city,
//         state: state,
//         zipCode: zipCode,
//         cardNumber: cardNumber,
//         expirationDate: expirationDate,
//         cvv : cvv,
//       });
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
    
//   };
  
//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <Text style={styles.title}>Checkout</Text>
//         <View style={styles.section}>
//           <Ionicons name="ios-location-outline" size={24} color="black" style={styles.icon} />
//           <Text style={styles.heading}>Shipping address</Text>
//         </View>
//         <TextInput placeholder="Full name" style={styles.input} value={name} onChangeText={setName} />
//         <TextInput placeholder="Address" style={styles.input} value={address} onChangeText={setAddress} />
//         <TextInput placeholder="City" style={styles.input} value={city} onChangeText={setCity} />
//         <TextInput placeholder="State" style={styles.input} value={state} onChangeText={setState} />
//         <TextInput placeholder="Zip code" style={styles.input} value={zipCode} onChangeText={setZipCode} />
//         <View style={styles.section}>
//           <Ionicons name="ios-card-outline" size={24} color="black" style={styles.icon} />
//           <Text style={styles.heading}>Payment information</Text>
//         </View>
//         <TextInput placeholder="Card number" style={styles.input} value={cardNumber} onChangeText={setCardNumber} />
//         <TextInput placeholder="Expiration date" style={styles.input} value={expirationDate} onChangeText={setExpirationDate} />
//         <TextInput placeholder="CVV" style={styles.input} value={cvv} onChangeText={setCvv} />
//         {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
//         <TouchableOpacity style={styles.button} onPress={handlePlaceOrder}>
//           <Text style={styles.buttonText}>Place Order</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   section: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   heading: {
//     fontSize: 18,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
//     buttonText: {
//       color: '#fff',
//       fontSize: 18,
//       textAlign: 'center',
//     },

//   });




















import React from 'react';
import { View } from 'react-native';
import CashPaymentScreen from './cashPayment';
import CardPaymentScreen from './cardPayment';

const PaymentScreen = ({navigation}) => {
  return (
    <View>
      <CardPaymentScreen />
      <CashPaymentScreen />
    </View>
  );
};

export default PaymentScreen;