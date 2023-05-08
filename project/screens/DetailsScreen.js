import { useState } from 'react';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  ImageBackground,
  Pressable,
} from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailsScreen = ({ navigation, route }) => {
  const book = route.params;
  const [value, setValue] = useState(0);
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
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon
          name='account'
          size={28}
          onPress={() => navigation.navigate('EditProfileScreen')}
        ></Icon>
        <Text style={styles.title}>Details</Text>
        <Icon
          name='cart-outline'
          size={28}
          onPress={() => navigation.navigate('Cart')}
        ></Icon>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        alignItems='center'
        justifyContent='center'
      >
        <ImageBackground source={book.image} style={styles.backgroundimage}>
          <View style={styles.ratingcontainer}>
            <View style={styles.ratingicon}>
              <Icon name='star' color='orange' size={18} />
              <Text style={styles.ratingtext}>{book.rating}</Text>
            </View>
            <Text style={styles.reviewtext}>{book.reviews} Reviews</Text>
          </View>
        </ImageBackground>
        <View style={styles.detailscontainer}>
          <Text style={styles.text}>{book.name}</Text>
          <Text style={styles.specialtext}>Description</Text>
          <Text style={styles.descriptiontext}>{book.description}</Text>
          <View style={styles.pricecontainer}>
            <Text style={styles.pricetext}>{book.price}</Text>

            <View style={styles.quantitycontainer}>
              <View style={styles.quantityBtn}>
                <Icon name='plus' size={20} onPress={ addfun} />
              </View>
              <Text style={styles.quantitytext}>{value}</Text>
              <View style={styles.quantityBtn}>
                <Icon name='minus' size={20} onPress={ minusfun} />
              </View>
            </View>
          </View>
          <View style={styles.favcontainer}>
            <View style={styles.favbtn}>
              <Icon name='heart-outline' color='#ffff' size={28} />
            </View>
            <View style={styles.cartbtn}>
              <Text style={styles.carttext}>Add to cart</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F1EE',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    color: '#2b2129',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2b2129',
  },
  specialtext: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#2b2129',
  },
  descriptiontext: {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 20,
    color: '#2b2129',
  },
  ratingtext: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#2b2129',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: '#F5F1EE',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundimage: {
    marginHorizontal: 20,
    height: 450,
    borderRadius: 15,
    overflow: 'hidden',
  },
  ratingcontainer: {
    height: 60,
    width: 70,
    backgroundColor: '#e5d1b8',
    position: 'absolute',
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
  },
  ratingicon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  reviewtext: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#2b2129',
  },
  detailscontainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 40,
  },
  pricecontainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pricetext: {
    fontSize: 22,
    color: '#de8e59',
    fontWeight: 'bold',
  },
  quantitycontainer: {
    height: 35,
    width: 100,
    backgroundColor: '#e5d1b8',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  quantityBtn: {
    height: 25,
    width: 25,
    backgroundColor: '#F5F1EE',
    borderRadius: 7,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantitytext: {
    fontWeight: 'bold',
  },
  favcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favbtn: {
    height: 50,
    width: 50,
    elevation: 7,
    marginRight: 30,
    backgroundColor: '#c2956e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  cartbtn: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c2956e',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  carttext: {
    fontSize: 20,
    color: '#ffff',
  },
});
export default DetailsScreen;
