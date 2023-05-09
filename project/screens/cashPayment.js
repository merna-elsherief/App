// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';

// const CashPaymentScreen = () => {
//   const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

//   const handleCashPayment = () => {
//     setIsPaymentCompleted(true);
//   };

//   return (
//     <View>
//       {!isPaymentCompleted ? (
//         <Button title="Pay with Cash" onPress={handleCashPayment} />
//       ) : (
//         <Text>Payment completed with Cash</Text>

//       )}
//     </View>
//   );
// };

// export default CashPaymentScreen;

// import React, { useState } from 'react';
// import { View, Text, Button , TouchableOpacity,StyleSheet} from 'react-native';

// const CashPaymentScreen = () => {
//   const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

//   const handleCashPayment = () => {
//     setIsPaymentCompleted(true);
//   };

//   if (isPaymentCompleted) {
//     return <Text>Payment completed</Text>;
//   }

//   return (
//     <View>
// <TouchableOpacity style={styles.button} onPress={handleCashPayment}>
//           <Text style={styles.buttonText}>Place Order</Text>
//         </TouchableOpacity>
//         </View>
//   );
// };

// export default CashPaymentScreen;

import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";

export default function CashPaymentScreen({navigation}) {
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

  const handleCashPayment = () => {
    setIsPaymentCompleted(true);
    window.alert("Payment Successful");
      
  };

  if (isPaymentCompleted) {
    // navigation.navigate("Home");
    return <Text>done</Text>;
      
  }
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={handleCashPayment}>
        <Text style={styles.buttonText}>Pay with cash</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        margin:20,
      },
        buttonText: {
          color: '#fff',
          fontSize: 18,
          textAlign: 'center',
        },
});










// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const CashPaymentScreen = () => {
//   const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);
//   const navigation = useNavigation();

//   const handleCashPayment = () => {
//     setIsPaymentCompleted(true);
//   };

//   if (isPaymentCompleted) {
//     navigation.navigate('Payment');
//     return null;
//   }

//   return (
//     <View>
//       <Button title="Pay with cash" onPress={handleCashPayment} />
//     </View>
//   );
// };

// export default CashPaymentScreen;
