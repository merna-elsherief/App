import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Form, InputField } from 'react-native-validator-form';

export default function CashPayment({}) {
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const[zipCode, setZipCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateAddress = (value) => {
    // You can add custom validation logic here
    return /[a-zA-Z0-9]/.test(value); // Validate that the value contains letters and numbers
  }

  const isValidPhoneNumber = (value) => {
    const regx = /^[0-9\b]+$/;
    return regx.test(value);
  };

  const updateError = (errorMessage, stateUpdater) => {
    stateUpdater(errorMessage);
    setTimeout(() => {
      stateUpdater("");
    }, 2500);
  };
  const handlePayment = () => {
    if (!address || !name || !phone || !city || !state || !zipCode) 
     return updateError("All fields are required", setErrorMessage);
    if (!name.trim() || name.length < 3)
    return  updateError("Invalid name!", setErrorMessage);
    if (!isValidPhoneNumber(phone) || phone.length != 11)
     return updateError("Phone must contain 11 numbers !", setErrorMessage);
    
    
    // Handle payment logic here

    window.alert("Payment processed successfully");
    setAddress("");
    setName("");
    setPhone("");
    setCity("");
    setState("");
    setZipCode("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cash Payment</Text>
      <View style={styles.form}>
        {errorMessage ? (
          <Text style={{ color: "red", fontSize: 20, textAlign: "center" }}>
            {errorMessage}
          </Text>
        ) : null}
        <TextInput
          placeholder="Customer Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Customer Phone"
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Address"
          style={styles.input}
          value={address}
          onChangeText={setAddress}
          validators={[validateAddress]}
        />
         <TextInput
          placeholder="City"
          style={styles.input}
          value={city}
          onChangeText={setCity}
          validators={[validateAddress]}
        />
         <TextInput
          placeholder="State"
          style={styles.input}
          value={state}
          onChangeText={setState}
          validators={[validateAddress]}
        />
         <TextInput
          placeholder="Zip code"
          style={styles.input}
          value={zipCode}
          onChangeText={setZipCode}
          validators={[validateAddress]}
        />
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  form: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#c2956e",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  errorMessage: {
    justifyContent: "center",
    color: "red",
    fontSize: 19,
  },
});
