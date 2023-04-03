import { StatusBar } from 'expo-status-bar';
import React , { useState } from "react";
import { StyleSheet, Text, TextInput, View,Button, ScrollView,image, ImageBackground } from 'react-native';
import img from "../assets/run.jpg";
import auth from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Profile( { navigation } ){
    const[Signin,setSignin]=useState(false);
    const[email,setEmail]=useState('');
    const[Password,setPassword]=useState('');
    const signinfunc=()=>{
  
    }
    const handlesignin =() =>{
      signInWithEmailAndPassword(auth, email, Password)
  .then((userCredential) => {
    // Signed in 
    navigation.navigate("Profile")
    console.log("done sign in")
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
    }
  return (
   
    <View style={styles.container}>
     <View style={styles.TitleView}>
       <ImageBackground source={img} resizeMode='cover'style={{justifyContent:'center',width:'100%',height:'100%'}}>
       <Text style={styles.title}>           Signin           </Text>
       </ImageBackground>

    </View>
    <ScrollView>
      
    <View>
    <View style={styles.inputView}>
      <TextInput 
      style ={styles.inputText}
       placeholder='email'
        value={email}
        // onChangeText={text =>setEmail(text)}>
        onChangeText ={setEmail}>
      </TextInput>
      <TextInput 
      style ={styles.inputText}
       placeholder='Password'
       value={Password}
      secureTextEntry={true}
      // onChangeText={text =>setPassword(text)} >
      onChangeText={setPassword}>
      </TextInput>
    </View>
    <View style={styles.buttonView}>
        <Button title='sign in'
         color= '#b2ff59' onPress={handlesignin}>

         </Button>
      </View>
      <View style={styles.buttonView}>
      <Button title='  Home  ' color= '#b2ff59' onPress={()=> navigation.navigate('Home')}></Button>
      </View>
    </View>
    </ScrollView>
    <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FFFA',
    alignItems: 'center',
    justifyContent: 'center',
  },Text: {
    fontSize: 20,
    backgroundColor:'#e5e5e5',


  },title:{
    marginTop:10,
    backgroundColor:"#A2AD9C",
    paddingTop:10,
    color:'white',
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    paddingBottom :10,
    alignItems:'center',

  },TitleView:{
    flex:1,
  },inputView:{
    flex:1,
    paddingTop:10,
    justifyContent:'space-between',
    paddingBottom:10,
    borderBottomWidth:5,
    borderColor :'#212121'
  },buttonView:{
    flexDirection:'row',
    margin: 12,
    justifyContent:'space-around'

  },inputText:{
    borderWidth:2,
    marginBottom:5,
    borderColor:'#36F57F',
    fontSize:20,
    padding:10,
  },
  // Image:{
  //   width:150,
  //   height:160,
  // }
});

