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
} from "react-native";
import React from "react";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import img from "../assets/images/image3.jpg";
import CustomButton from "../components/customButton";
import CustomInput from "../components/customInput";
import { auth, db } from "../firebase/fireBase";
import validator from "validator";
import { shadow } from "react-native-paper";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

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

  const [error, setError] = useState("");

  const { title, desc, price, count, img, instock } = productInfo;

  const handleOnChangeText = (value, fieldName) => {
    setProductInfo({ ...productInfo, [fieldName]: value });
  };
  const addProductToDataBase = async () => {
    await addDoc(collection(db, "products"), {
      title: title,
      desc: desc,
      price: price,
      count: count,
      img: img,
      instock: count === 0 ? false : true,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Books</Text>
      <Text style={{ fontSize: 20, paddingBottom: 15 }}>
        {" "}
        It's quick and easy.
      </Text>
      {error ? (
        <Text style={{ color: "red", fontSize: 20, textAlign: "center" }}>
          {error}
        </Text>
      ) : null}
      <View style={styles.textInput}>
        <PersonIcon style={styles.icon}></PersonIcon>
        <TextInput
          style={styles.input}
          placeholder="title"
          label="Title"
          value={title}
          onChangeText={(value) => handleOnChangeText(value, "title")}
        />
      </View>
      <View style={styles.textInput}>
        <PersonIcon style={styles.icon}></PersonIcon>
        <TextInput
          style={styles.input}
          placeholder="desc"
          label="Description"
          value={desc}
          onChangeText={(value) => handleOnChangeText(value, "desc")}
        />
      </View>
      <View style={styles.textInput}>
        <EmailIcon style={styles.icon}></EmailIcon>
        <TextInput
          style={styles.input}
          placeholder="price"
          value={price}
          onChangeText={(value) => handleOnChangeText(value, "price")}
        />
      </View>
      <View style={styles.textInput}>
        <LockIcon style={styles.icon}></LockIcon>
        <TextInput
          style={styles.input}
          placeholder="count"
          value={count}
          onChangeText={(value) => handleOnChangeText(value, "count")}
        />
      </View>
      <View style={styles.textInput}>
        <PhoneEnabledIcon style={styles.icon}></PhoneEnabledIcon>
        <TextInput
          style={styles.input}
          placeholder="img"
          value={img}
          onChangeText={(value) => handleOnChangeText(value, "img")}
        />
      </View>
      {/* <View style={styles.textInput}>
        <CalendarMonthIcon style={styles.icon}></CalendarMonthIcon>
        <TextInput
          style={styles.input}
          placeholder="BirthDay"
          value={birthday}
          onChangeText={(value) => handleOnChangeText(value, "birthday")}
        />
      </View> */}
      <CustomButton text="Add" onPress={addProductToDataBase} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E6D4CA",
  },
  img: {
    flex: 0.7,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 50,
    justifyContent: "center",
    marginRight: 10,
  },

  text: {
    fontSize: 20,
    color: "#ffff",
    marginLeft: 50,
  },
  textInput: {
    backgroundColor: "#ffff",
    width: "60%",
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 4,
    borderColor: "white",
    flexDirection: "row",
  },

  input: {
    height: "100%",
    fontSize: 20,
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },

  icon: {
    paddingLeft: 3,
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 10,
  },
});
export default addProduct;
