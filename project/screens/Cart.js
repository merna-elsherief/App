import { useState, useEffect, useLayoutEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import books from "../const/books";
import CustomButton from "../components/customButton";
import { auth, db, app } from "../firebase/fireBase";
import { doc, getDoc, updateDoc, setDoc, arrayUnion } from "firebase/firestore";
// import AsyncStorage from '@react-native-async-storage/async-storage';
const Cart = ({ navigation }) => {
  const [value, setValue] = useState(0);
  ///////////////////////////////////////////////////////////////////////

  // const [booksss, setBooksss] = useState([]);
  // useEffect(() => {});
  // useLayoutEffect(async () => {
  //   const docRef = doc(db, "cart", auth.currentUser.uid);
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) {
  //     // Convert to City object
  //     const city = docSnap.data();
  //     // Use a City instance method
  //     console.log(city.products);
  //     console.log(city.length);
  //   } else {
  //     console.log("No such document!");
  //   }
  // }, []);

  ///////////////////////////////////////////////////////////
  const addfun = () => {
    setValue(value + 1);
  };
  const minusfun = () => {
    if (value > 0) {
      setValue(value - 1);
    } else {
      setValue(0);
    }
  };
  const CartCard = ({ book }) => {
    return (
      <View style={styles.cartcard}>
        <Image source={book.image} style={{ height: 80, width: 80 }} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{book.name}</Text>

          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            EPG{book.price}
          </Text>
        </View>
        <View style={{ marginRight: 20, alignItems: "center" }}>
          <View style={styles.quantitycontainer}>
            <View style={styles.quantityBtn}>
              <Icon name="plus" size={20} onPress={addfun} />
            </View>
            <Text style={styles.quantitytext}>{value}</Text>
            <View style={styles.quantityBtn}>
              <Icon name="minus" size={20} onPress={minusfun} />
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={books}
        renderItem={({ item }) => <CartCard book={item} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Total Price
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>EPG50</Text>
            </View>

            <View style={{ justifyContent: "center", marginLeft: 50 }}>
              <CustomButton text="CHECKOUT" type="checkout" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F1EE",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2b2129",
  },
  itemtext: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2b2129",
  },
  cartcard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: "#ffff",
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  quantitycontainer: {
    height: 30,
    width: 100,
    backgroundColor: "#e5d1b8",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 10,
  },
  quantityBtn: {
    height: 25,
    width: 25,
    backgroundColor: "#F5F1EE",
    borderRadius: 7,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  quantitytext: {
    fontWeight: "bold",
  },
});
export default Cart;
