import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  useWindowDimensions,
  ImageBackground,
  style,
} from 'react-native';
import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import img from '../assets/images/image3.jpg';
import CustomButton from '../components/customButton';
import CustomInput from '../components/customInput';
import auth from '../firebase/fireBase';


const isValidObjectForm = (obj) => {
  return Object.values(obj).every(value => value.trim())
}

const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater('')
  }, 2500);
}

const isValidEmail = (value) =>{
  const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return regx.test(value)
}

const signUp = ({ navigation }) => {
  const { height } = useWindowDimensions();

  const [userInfo, setUserInfo] = useState({
    fullName: '',
    email: '' ,
    password: '',
  })

  const [error, setError] = useState('');

  const {fullName, email, password } = userInfo;

  const handleOnChangeText = (value, fieldName) =>{
    setUserInfo({...userInfo, [fieldName]: value});
  };

  const isValidForm = () =>{
    // we will accept only if all fields have value
    if(!isValidObjectForm(userInfo)) return updateError('Required all fields!', setError);
    // valid name must be 3 or more characters
    if(!fullName.trim() || fullName.length < 3)
    return updateError('Invalid name!', setError);
    // only valid email id is allowed
    if(!isValidEmail(email)) return updateError('Invalid email!', setError);
    //password must have 8 or more characters
    if(!password.trim() || password.length < 8) 
    return updateError('Password is less than 8 characters!', setError);
  
    return true;
  }


  const handleSignUp = () => {

    if(isValidForm()){
      console.log(userInfo);
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        console.log('Done');
        const user = userCredential.user;
        navigation.navigate('SignIn');

        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create An Account</Text>
      {error ? 
      <Text style={{color: 'red', fontSize:20 ,textAlign: 'center'}}> 
        {error} 
      </Text>: null}
      <View style={styles.textInput}>
      <TextInput 
        style={styles.input}
        placeholder='Full Name' 
        label='Full Name'
        value={fullName} 
        onChangeText={value => handleOnChangeText(value,'fullName')}
        />
      </View>
      <View style={styles.textInput}>
      <TextInput 
        style={styles.input}
        placeholder='Email' 
        value={email} 
        onChangeText={value => handleOnChangeText(value,'email')}
        />
      </View>
      <View style={styles.textInput}>
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={value => handleOnChangeText(value,'password')}
        secureTextEntry={true}
      />
      </View>
      <CustomButton text='Sign up' onPress={handleSignUp} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  img: {
    flex: 0.7,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 50,
    justifyContent: 'center',
    marginRight: 10,
  },

  text: {
    fontSize: 20,
    color: '#ffff',
    marginLeft: 50,
  },
  textInput:{
    backgroundColor: '#ffff',
    width: '100%',
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 999,
  },
  
  input: {
    height: '100%',
    fontSize: 20,
  },
});
export default signUp;

