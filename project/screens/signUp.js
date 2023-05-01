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
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import img from '../assets/images/image3.jpg';
import CustomButton from '../components/customButton';
import CustomInput from '../components/customInput';
import { auth, db } from '../firebase/fireBase';

const isValidObjectForm = obj => {
  return Object.values(obj).every(value => value.trim());
};

const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater('');
  }, 2500);
};

const isValidEmail = value => {
  const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return regx.test(value);
};

const isValidPhoneNumber = value => {
  const regx = /^[0-9\b]+$/;
  return regx.test(value);
};

const signUp = ({ navigation }) => {
  const { height } = useWindowDimensions();

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthday: '',
    phone: '',
  });

  const [error, setError] = useState('');

  const { firstName, lastName, email, password, birthday, phone } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    let isValid = true;
    // we will accept only if all fields have value
    if (!isValidObjectForm(userInfo))
      return updateError('Required all fields!', setError);
    // valid name must be 3 or more characters
    if (!firstName.trim() || firstName.length < 3)
      return updateError('Invalid name!', setError);
    // only valid email id is allowed
    if (!isValidEmail(email)) return updateError('Invalid email!', setError);
    //password must have 8 or more characters
    if (!password.trim() || password.length < 8)
      return updateError('Password is less than 8 characters!', setError);
    else handleSignUp();

    return true;
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        console.log('Done');
        const user = userCredential.user;
        navigation.navigate('SignIn');

        // ...
        addUserToDataBase();
      })

      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  const addUserToDataBase = async () => {
    await setDoc(doc(db, 'usersData', auth.currentUser.uid), {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      birthday: birthday,
      email: email,
      photo: '',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create An Account</Text>
      {error ? (
        <Text style={{ color: 'red', fontSize: 20, textAlign: 'center' }}>
          {error}
        </Text>
      ) : null}
      <View style={styles.textInput}>
        <TextInput
          style={styles.input}
          placeholder='First Name'
          label='First Name'
          value={firstName}
          onChangeText={value => handleOnChangeText(value, 'firstName')}
        />
      </View>
      <View style={styles.textInput}>
        <TextInput
          style={styles.input}
          placeholder='Last Name'
          label='Last Name'
          value={lastName}
          onChangeText={value => handleOnChangeText(value, 'lastName')}
        />
      </View>
      <View style={styles.textInput}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          value={email}
          onChangeText={value => handleOnChangeText(value, 'email')}
        />
      </View>
      <View style={styles.textInput}>
        <TextInput
          style={styles.input}
          placeholder='Password'
          value={password}
          onChangeText={value => handleOnChangeText(value, 'password')}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.textInput}>
        <TextInput
          style={styles.input}
          placeholder='Phone'
          value={phone}
          onChangeText={value => handleOnChangeText(value, 'phone')}
        />
      </View>
      <View style={styles.textInput}>
        <TextInput
          style={styles.input}
          placeholder='BirthDay'
          value={birthday}
          onChangeText={value => handleOnChangeText(value, 'birthday')}
        />
      </View>
      <CustomButton text='Sign up' onPress={isValidForm} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e5d1b8',
  },
  img: {
    flex: 0.7,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    justifyContent: 'center',
    marginRight: 10,
    fontWeight: 'bold',
    color:'#ffff'
  },

  text: {
    fontSize: 20,
    color: '#ffff',
    marginLeft: 50,
  },
  textInput: {
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
