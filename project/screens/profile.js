import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  ImageBackground,
  style,
  SafeAreaView,
} from "react-native";
import {
  Avatar,
  Title,
  caption,
  Text,
  TouchableRipple,
  Caption,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import img from "../assets/images/image5.jpg";
import img1 from "../assets/123.jpg";

import { auth, db } from "../firebase/fireBase";
import { doc, getDoc } from "firebase/firestore";
import CustomButton from "../components/customButton";
import { signOut } from "firebase/auth";

const profile = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthDay] = useState("");
  const [photo, setPhoto] = useState(null);
  const [viewMode, setViewMode] = useState(true);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Done");
        navigation.navigate("Welcome");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleEdit = () => {
    navigation.navigate("EditProfileScreen");
  };
  const handleSave = () => {
    setViewMode(true);
  };
  const handleEditHere = () => {
    setViewMode(false);
  };
  const getUser = async () => {
    const docRef = doc(db, "usersData", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      const data = docSnap.data();
      setEmail(data.email);
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setPhone(data.phone);
      setPhoto(data.photo);
      setBirthDay(data.birthday);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };
getUser();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          {photo ? (
            <Image source={{ uri: photo }} style={styles.photo} />
          ) : (
            <ImageBackground
              source={img1}
              style={{ height: 100, width: 100 }}
              imageStyle={{ borderRadius: 15 }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              >
              </View>
            </ImageBackground>
          )}
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              {" "}
              {firstName} {lastName}
            </Title>
            <Caption style={styles.caption}> {email}</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        {/* <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}> Cairo,Egypt</Text>
        </View> */}
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}> {phone}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}> {email}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="id-card" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}> {birthday} </Text>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: "#dddddd",
              borderRightWidth: 1,
            },
          ]}
        >
          <Title>$120</Title>
          <Caption>wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>order</Caption>
        </View>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}> Favorites </Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}> Payment </Text>
          </View>
        </TouchableRipple>
        {/* <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}> Share </Text>
          </View>
        </TouchableRipple> */}
        {/* <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}> support </Text>
          </View>
        </TouchableRipple> */}
        <TouchableRipple onPress={handleEdit}>
          <View style={styles.menuItem}>
            <Icon name="account-settings-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}> Setting </Text>
          </View>
        </TouchableRipple>
      </View>
      <View>
        <TouchableRipple onPress={handleSignOut}>
          <View style={styles.menuItem}>
            <Icon name="logout" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}> logout </Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E6D4CA",
    justifyContent: "center",
    padding: 50,
    // marginTop: 50,
  },
  img: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  title: {
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    fontWeight: "bold",
  },
  span: {
    color: "#c2956e",
    fontWeight: "bold",
    justifyContent: "center",
    padding: 5,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#ffff",
    marginLeft: 50,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  photo: {
    width: 90,
    height: 90,
    borderRadius: 75,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
export default profile;
// {/* <Text></Text> */}
