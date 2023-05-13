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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function PaymentScreen({navigation}) {

  return (
    <View style={styles.container}>
      <View style={styles.t}>
          <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('cardPayment')}
>
            {/* <Icon
              // size={0.1}
              // color='transparent'
              // justifyContent='center'
              onPress={() => navigation.navigate('cardPayment')}
            > */}
            
              <Text style={[styles.buttonText,{ }]}> Pay with Visa</Text>
            {/* </Icon> */}
            </TouchableOpacity>
          </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CashPayment')}>
        <Text style={styles.buttonText}>Pay with Cash</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigation.navigate("")}>
        <Text style={styles.buttonText}>Pay with PayPal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    paddingTop:310
  },
    button: {
        backgroundColor: '#c2956e',
        padding: 10,
        borderRadius: 5,
        margin:20,
        marginLeft:60,
        marginRight:60,
      },
        buttonText: {
          color: '#fff',
          fontSize: 18,
          textAlign: 'center',
        },
        containercheckout: {
          width: '50%',
          flexDirection: 'row',
          backgroundColor: '#c2956e',
          borderRadius: 25,
          height: 50,
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 40,
          marginBottom: 10,
          paddingHorizontal: 10,
          marginLeft:90
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
