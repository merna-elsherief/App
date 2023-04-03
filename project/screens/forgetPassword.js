import { useState } from 'react';
import {StyleSheet , View, Text , TouchableOpacity ,
        Image , useWindowDimensions } 
        from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-web';
import OIP from '../assets/images/OIP.jpg';


const forgetPassword = () => {
const { height } = useWindowDimensions();
const [Email , setEmail] = useState("");
const handleforgetPassword = () => {
 console.log('done')
}
  return (
    <View style={styles.container}>
         <Image source={OIP} style={[styles.logo, {height:height*0.5}]} resizeMode="contain"/>
      <Text style={styles.title}>
        FORGET PASSWORD ?
      </Text>
      <Text style={styles.text}>
        Don't worry! Enter your Email below and we'll email you 
        with instruction on how to reset your password!!
      </Text>
      <View style={styles.inputView}>
        <TextInput
                style={styles.TextInput}
                placeholder="Email"
                placeholderTextColor="#003f5c"
                value={Email}
                onChangeText={setEmail} /> 
      </View>

      <TouchableOpacity style={styles.Btn} onPress={handleforgetPassword} >
          <Text  style={styles.cc} >Send Link</Text> 
      </TouchableOpacity> 

      <TouchableOpacity type="Link" >
        <Text style={styles.ccc}> Back to sign in </Text>
      </TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    logo:{
        width:"70%",
        maxWidth:300,
        maxheight:500,
        alignSelf:'center',
        
    },

    title:{
     fontSize:50,
     fontWeight:'bold',
     paddingLeft:10,
     marginBottom:10,
    },

    text:{
     fontSize:20,
     paddingLeft:10,
     
    },

    inputView: {
        backgroundColor: "#DDDDDD",
        borderRadius: 30,
        alignSelf:"center",
        width: "95%",
        height: 45,
        marginBottom: 20,
        marginTop:30,
      },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        fontSize:20,
        paddingLeft:20,
        fontWeight:'bold',
      },

      Btn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#B4D9F3",
        alignSelf:"center",
      },

      cc:{
        fontSize:20,
        fontWeight:"bold",
      },

      ccc:{
        fontSize:15,
        fontWeight:"bold",
        padding:15,
        alignSelf:'center',
      }

  });

export default forgetPassword