import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  ImageBackground,
  style,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import{
  Avatar,
  Title,
  caption,
  Text,
TouchableRipple,
Caption,
TextInput,
}from 'react-native-paper';

import { doc, getDoc,updateDoc  } from "firebase/firestore";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import img from '../assets/images/image5.jpg';
import img1 from '../assets/123.jpg';
import CustomButton from '../components/customButton';
import { signOut } from 'firebase/auth';
import {auth, db } from '../firebase/fireBase';

const profile = () => {
  const getUser=async()=>{
    const docRef = doc(db, "users", auth.currentUser.uid);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  const data=docSnap.data();
  setName(data.name);
  setEmail(data.email);
  setBearthDate(data.bearthDate);
  setPhone(data.phone);
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
  }
  const [viewMode,setViewMode]=useState(true);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [bearthDate,setBearthDate]=useState("");
  const [place,setPlace]=useState("");
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('Done');
        navigation.navigate('Welcome');
      })
      .catch(error => {
        // An error happened.
      });
  };
  const handleSave=()=>{
    setViewMode(true);
    updateUserData();
  }
  const handleEdit=()=>{
    setViewMode(false);
  }
  const updateUserData = async()=>{
    const washingtonRef = doc(db, "users", auth.currentUser.uid);

    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
      name:name,
      phone:phone,
      bearthDate:bearthDate,

    });
  }
  {viewMode?getUser():null}
  return (
    <SafeAreaView style={styles.container}>
       
      

     {
      viewMode?(<View>
          <View style ={styles.userInfoSection}> 
        <View style={{flexDirection:'row',marginTop:15}}>
          <Avatar.Image
          source={
            img1
          }
          size={80}
          />
          <View style={{marginLeft:20}}>
             <Title style={[styles.title,{
              marginTop:15,
              marginBottom:5,
            }]}> user</Title>
            <Caption style={styles.caption}> {email}</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
         <Icon name = "map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:'#777777',marginLeft:20}} > cairo,Egipt</Text>
        </View>
        <View style={styles.row}>
         <Icon name = "phone" color="#777777" size={20}/>
          <Text style={{color:'#777777',marginLeft:20}} >{phone}</Text>
        </View>
        <View style={styles.row}>
         <Icon name = "email" color="#777777" size={20}/>
          <Text style={{color:'#777777',marginLeft:20}} >  {name}</Text>
        </View>
        <View style={styles.row}>
         <Icon name = "id-card" color="#777777" size={20}/>
          <Text style={{color:'#777777',marginLeft:20}} > {bearthDate} </Text>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox,{
          borderRightColor:'#dddddd',
          borderRightWidth:1,
        }]}>
          <Title>$120</Title>
          <Caption>wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>order</Caption>
        </View>
      </View>
      <View style={styles.menuWrapper}>
       <TouchableRipple onPress={()=>{}}>
        <View  style={styles.menuItem}>
          <Icon name='heart-outline' color='#FF6347' size={25}/>
          <Text style={styles.menuItemText}> Favorites </Text>
        </View>
       </TouchableRipple>
       <TouchableRipple onPress={()=>{}}>
        <View  style={styles.menuItem}>
          <Icon name='credit-card' color='#FF6347' size={25}/>
          <Text style={styles.menuItemText}> Payment </Text>
        </View>
       </TouchableRipple>
       <TouchableRipple onPress={()=>{}}>
        <View  style={styles.menuItem}>
          <Icon name='share-outline' color='#FF6347' size={25}/>
          <Text style={styles.menuItemText}> Share </Text>
        </View>
       </TouchableRipple>
       <TouchableRipple onPress={()=>{}}>
        <View  style={styles.menuItem}>
          <Icon name='account-check-outline' color='#FF6347' size={25}/>
          <Text style={styles.menuItemText}> support </Text>
        </View>
       </TouchableRipple>
          {/* <TouchableRipple onPress={()=>{}}>
        <View  style={styles.menuItem}>
          <Icon name='settings-outline' color='#FF6347' size={25}/>
          <Text style={styles.menuItemText}> Setting </Text>
        </View>
       </TouchableRipple> */}
      
        <TouchableOpacity style={[{alignSelf:"auto" ,with:"10%",paddingTop:5}]}>
           <Text style={styles.menuItemText} onPress={handleEdit}> Edit</Text>
        </TouchableOpacity>
     </View>
      </View>):(<View>
        <View style ={styles.userInfoSection}> 
        <View style={{flexDirection:'row',marginTop:15}}>
          <Avatar.Image
          source={
            img1
          }
          size={80}
          />
          <View style={{marginLeft:20}}>
             <Title style={[styles.title,{
              marginTop:15,
              marginBottom:5,
            }]}> user</Title>
            <Caption style={styles.caption}> {email}</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
         <Icon name = "map-marker-radius" color="#777777" size={20}/>
          <TextInput style={{color:'#777777',marginLeft:20}} 
          value={place}
            onChangeText={setPlace}
            autoFocus
           />
        </View>
        <View style={styles.row}>
         <Icon name = "phone" color="#777777" size={20}/>
          <TextInput style={{color:'#777777',marginLeft:20}} 
          value={phone}
          onChangeText={setPhone}
          autoFocus/>
        </View>
        <View style={styles.row}>
         <Icon name = "email" color="#777777" size={20}/>
          <TextInput style={{color:'#777777',marginLeft:20}}
           value={name}
           onChangeText={setName}
           autoFocus />  
        </View>
        <View style={styles.row}>
         <Icon name = "id-card" color="#777777" size={20}/>
          <TextInput style={{color:'#777777',marginLeft:20}} 
            value={bearthDate}
            onChangeText={setBearthDate}
            autoFocus  /> 
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox,{
          borderRightColor:'#dddddd',
          borderRightWidth:1,
        }]}>
          <Title>$120</Title>
          <Caption>wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>order</Caption>
        </View>
      </View>
      <View style={styles.menuWrapper}>
       <TouchableRipple onPress={()=>{}}>
        <View  style={styles.menuItem}>
          <Icon name='heart-outline' color='#FF6347' size={25}/>
          <Text style={styles.menuItemText}> Favorites </Text>
        </View>
       </TouchableRipple>
       <TouchableRipple onPress={()=>{}}>
        <View  style={styles.menuItem}>
          <Icon name='credit-card' color='#FF6347' size={25}/>
          <Text style={styles.menuItemText}> Payment </Text>
        </View>
       </TouchableRipple>
       <TouchableRipple onPress={()=>{}}>
        <View  style={styles.menuItem}>
          <Icon name='share-outline' color='#FF6347' size={25}/>
          <Text style={styles.menuItemText}> Share </Text>
        </View>
       </TouchableRipple>
       <TouchableRipple onPress={()=>{}}>
        <View  style={styles.menuItem}>
          <Icon name='account-check-outline' color='#FF6347' size={25}/>
          <Text style={styles.menuItemText}> support </Text>
        </View>
       </TouchableRipple>
          {/* <TouchableRipple onPress={()=>{}}>
        <View  style={styles.menuItem}>
          <Icon name='settings-outline' color='#FF6347' size={25}/>
          <Text style={styles.menuItemText}> Setting </Text>
        </View>
       </TouchableRipple> */}
      
        <TouchableOpacity style={[{alignSelf:"auto" ,with:"10%",paddingTop:5}]}>
           <Text style={styles.menuItemText} onPress={handleSave}> save</Text>
        </TouchableOpacity>
     </View>
      </View>)
      }
    </SafeAreaView>
   

      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6D4CA',
    justifyContent: 'center',
    padding: 50,
  },
  img: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  title: {
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    fontWeight:'bold',
  },
  span: {
    color: '#c2956e',
    fontWeight: 'bold',
    justifyContent: 'center',
    padding: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffff',
    marginLeft: 50,
  },
  userInfoSection:{
    paddingHorizontal: 30,
    marginBottom:25,
  },
 caption:{
   fontSize:14,
   lineHeight:14,
   fontWeight:'500',
  },
  row:{
   flexDirection:'row',
   marginBottom:10,
  },
  infoBoxWrapper:{
    borderBottomColor:'#dddddd',
    borderBottomWidth:1,
    borderTopColor:'#dddddd',
    borderTopWidth:1,
    flexDirection:'row',
    height:100,
  },
  infoBox:{
    width:'60%',
    alignItems:'center',
    justifyContent:'center',
  },
  menuWrapper:{
   marginTop:10,
  },
  menuItem:{
    flexDirection:'row',
    paddingVertical:15,
    paddingHorizontal:30,
  },
  menuItemText:{
    color:'#777777',
    marginLeft:20,
    fontWeight:'600',
    fontSize: 16,
    lineHeight:26,
  },
});
export default profile;
// {/* <Text></Text> */}
