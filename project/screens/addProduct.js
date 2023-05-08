import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  useWindowDimensions,
  ImageBackground,
  style,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import img from "../assets/images/image3.jpg";
import CustomButton from "../components/customButton";
import CustomInput from "../components/customInput";
import { auth, db } from "../firebase/fireBase";
import validator from "validator";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import img1 from "../assets/avatar.jpg";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as ImagePicker from "expo-image-picker";
import {
  Avatar,
  Title,
  caption,
  TouchableRipple,
  Caption,
  useTheme,
  shadow,
} from "react-native-paper";

const addProduct = ({ navigation }) => {
  const { height } = useWindowDimensions();

  const [productInfo, setProductInfo] = useState({
    title: "",
    desc: "",
    price: "",
    count: 0,
    img: "",
    instock: count === 0 ? false : true,
  });
  const { colors } = useTheme();
  const [error, setError] = useState("");

  const { title, desc, price, count, img, instock } = productInfo;

  const handleOnChangeText = (value, fieldName) => {
    setProductInfo({ ...productInfo, [fieldName]: value });
  };
    const handleChoosePhoto = async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
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
  const addProductToDataBase = async () => {
    const docRef2 = await addDoc(collection(db, "products"), {
      title: title,
      desc: desc,
      price: price,
      count: count,
      img: img,
      instock: count === 0 ? false : true,
    });
    console.log("Document written with ID: ", docRef2.id);
  };

  return (
    <View style={styles.container}>
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
            </View>
          </TouchableOpacity>
          {/* <Text style={{ marginRight: 10, fontSize: 18, fontWeight: "bold" }}>
            {email}
          </Text> */}
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Title"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[styles.textInput, { color: colors.text }]}
            value={title}
            onChangeText={(value) => handleOnChangeText(value, "title")}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Description"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[styles.textInput, { color: colors.text }]}
            value={desc}
            onChangeText={(value) => handleOnChangeText(value, "desc")}
          />
        </View>
        <View style={styles.action}>
          <Feather name="smartphone" color={colors.text} size={20} />
          <TextInput
            placeholder="Price"
            keyboardType="number-pad"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[styles.textInput, { color: colors.text }]}
            value={price}
            onChangeText={(value) => handleOnChangeText(value, "price")}
          />
        </View>
        <View style={styles.action}>
          <Icon2 name="date-range" color={colors.text} size={20} />
          <TextInput
            placeholder="Count"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[styles.textInput, { color: colors.text }]}
            value={count}
            onChangeText={(value) => handleOnChangeText(value, "count")}
          />
        </View>
        <TouchableOpacity
          onPress={addProductToDataBase}
          style={styles.commandButton}
        >
          <Text style={styles.panelButtonTitle}>Add Product</Text>
        </TouchableOpacity>
      </View>
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
export default addProduct;
