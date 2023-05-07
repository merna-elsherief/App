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
  TouchableOpacity,
} from "react-native";
import {
  Avatar,
  Title,
  caption,
  Text,
  TouchableRipple,
  Caption,
  TextInput,
  useTheme,
} from "react-native-paper";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

import { auth, db } from "../firebase/fireBase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import CustomButton from "../components/customButton";
import { signOut } from "firebase/auth";
import img1 from "../assets/avatar.jpg";
import * as ImagePicker from "expo-image-picker";
// import { fontConfig } from "react-native-paper/lib/typescript/src/styles/fonts";

const editprofilescreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthDay] = useState("");
  const [photo, setPhoto] = useState(null);
  const [viewMode, setViewMode] = useState(true);
  const { colors } = useTheme();
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
  const handleChoosePhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setPhoto(result.uri);
    }
  };
  const handleSubmit = () => {
    setViewMode(true);
    handleUpdate();
    // navigation.navigate("EditProfileScreen");
  };
  const handleUpdate = async () => {
    const washingtonRef = doc(db, "usersData", auth.currentUser.uid);

    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      birthday: birthday,
      photo: photo,
    });
  };
  const getUser = async () => {
    const docRef = doc(db, "user", auth.currentUser.uid);
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
      setPhoto(data.photo);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  const handleEdit = () => {
    setViewMode(false);
  };
  {
    viewMode ? getUser() : null;
  }
  return (
    <View style={styles.container}>
      {viewMode ? (
        <View style={{ margin: 20 }}>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ImageBackground
                  source={photo === "" ? img1 : photo}
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
                    {/* <Icon1
                      name="camera"
                      size={35}
                      color="#fff"
                      style={{
                        opacity: 0.7,
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: "#fff",
                      }}
                    /> */}
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <Text style={{ marginRight: 10, fontSize: 18, fontWeight: "bold" }}>
              {email}
            </Text>
          </View>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />
            <Text
              style={[styles.textInput, { color: colors.text }]}

              // onChangeText={setFirstName}
            >
              {firstName}
            </Text>
          </View>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />
            <Text
              style={[styles.textInput, { color: colors.text }]}

              // onChangeText={setFirstName}
            >
              {lastName}
            </Text>
          </View>
          <View style={styles.action}>
            <Feather name="smartphone" color={colors.text} size={20} />
            <Text
              placeholderTextColor="#666666"
              style={[styles.textInput, { color: colors.text }]} // onChangeText={setPhone}
            >
              {phone}
            </Text>
          </View>
          <View style={styles.action}>
            <Icon2 name="date-range" color={colors.text} size={20} />
            <Text
              placeholderTextColor="#666666"
              style={[styles.textInput, { color: colors.text }]}
              // onChangeText={setBirthDay}
            >
              {birthday}
            </Text>
          </View>
          <TouchableOpacity onPress={handleEdit} style={styles.commandButton}>
            <Text style={styles.panelButtonTitle}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSignOut}
            style={styles.commandButton}
          >
            <Text style={styles.panelButtonTitle}>Log Out</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ margin: 20 }}>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={handleChoosePhoto}>
              <View
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
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
                      <Icon1
                        name="camera"
                        size={35}
                        color="#fff"
                        style={{
                          opacity: 0.7,
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          borderWidth: 1,
                          borderColor: "#fff",
                        }}
                      />
                    </View>
                  </ImageBackground>
                )}
              </View>
            </TouchableOpacity>
            <Text style={{ marginRight: 10, fontSize: 18, fontWeight: "bold" }}>
              {email}
            </Text>
          </View>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />
            <TextInput
              placeholder="First Name"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={[styles.textInput, { color: colors.text }]}
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />
            <TextInput
              placeholder="Last Name"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={[styles.textInput, { color: colors.text }]}
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
          <View style={styles.action}>
            <Feather name="smartphone" color={colors.text} size={20} />
            <TextInput
              placeholder="Phone Number"
              keyboardType="number-pad"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={[styles.textInput, { color: colors.text }]}
              value={phone}
              onChangeText={setPhone}
            />
          </View>
          <View style={styles.action}>
            <Icon2 name="date-range" color={colors.text} size={20} />
            <TextInput
              placeholder="Birth Date"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={[styles.textInput, { color: colors.text }]}
              value={birthday}
              onChangeText={setBirthDay}
            />
          </View>
          <TouchableOpacity onPress={handleSubmit} style={styles.commandButton}>
            <Text style={styles.panelButtonTitle}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F1EE",
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#de8e59",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  photo: {
    width: 90,
    height: 90,
    borderRadius: 75,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    // marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
});
export default editprofilescreen;
// {/* <Text></Text> */}
