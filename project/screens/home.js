import { useState } from 'react';
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
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import books from '../const/books';
import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';

const home = ({ navigation }) => {
  /*const { height } = useWindowDimensions();
  const handleSignin = () => {
    navigation.navigate('SignIn');
  };*/
  const categoryItems = [
    { name: 'Top Books' },
    { name: 'Books' },
    { name: 'Novels' },
  ];
  const ListCategories = () => {
    const [selectedcategoryIndex, setselectedcategoryIndex] = useState(0);
    return (
      <View style={styles.categoriescontainer}>
        {categoryItems.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            onPress={() => setselectedcategoryIndex(index)}
          >
            <View
              style={[
                styles.categoryitemBtn,
                {
                  backgroundColor:
                    selectedcategoryIndex == index
                      ? '#c2956e'
                      : 'rgbs(0,0,0,0)',
                },
              ]}
            >
              <Text
                style={[
                  styles.categorytext,
                  {
                    color: selectedcategoryIndex == index ? 'white' : '#340763',
                  },
                ]}
              >
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const Card = ({ book }) => {
    return (
      <Pressable onPress={() => navigation.navigate('DetailsScreen', book)}>
        <View style={styles.card}>
          <Image
            source={book.image}
            style={{ height: 120, width: '100%', borderRadius: 10 }}
          />
          <View style={styles.iconContainer}>
            <Icon name='heart' color={book.liked ? 'red' : '#2b2129'} />
          </View>
          <Text style={styles.cardName}>{book.name}</Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.price}>{book.price}</Text>
            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
              <Icon name='star' color='orange' size={18} />
              <Text style={styles.rating}>{book.rating}</Text>
            </View>
            {/* <TouchableOpacity style={style.AddToCarbtn} onPress={(count) =>{count+1}}>
            
          </TouchableOpacity> */}
          </View>
        </View>
      </Pressable>
    );
  };
  const PopularCard = ({ book }) => {
    return (
      <Pressable onPress={() => navigation.navigate('DetailsScreen', book)}>
        <View style={styles.popularCard}>
          <Image
            source={book.image}
            style={{
              width: 70,
              height: '100%',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              marginRight: 10,
            }}
          />
          <View style={{ paddingVertical: 15, justifyContent: 'center' }}>
            <Text style={styles.cardName}>{book.name}</Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Text style={styles.price}>{book.price}</Text>
              <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                <Icon name='star' color='orange' size={18}></Icon>
                <Text style={styles.rating}>{book.rating}</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon
          name='account'
          size={28}
          onPress={() => navigation.navigate('EditProfileScreen')}
        ></Icon>
        <Icon name='cart-outline' size={28}></Icon>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>
          Bookshops are places of endless entertainment and renewal – what’s not
          to love?
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}
        >
          <View style={styles.searchcontainer}>
            <Icon name='magnify' color='grey' size={25} />
            <CustomInput placeholder='search' />
          </View>
          <View style={styles.sortBtn}>
            <Icon name='tune' color='#ffff' size={25} />
          </View>
        </View>
        <Text style={styles.title}>Categories</Text>
        <ListCategories />
        <Text style={styles.title}>Best Seller</Text>
        <FlatList
          contentContainerStyle={{ paddingLeft: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={books}
          renderItem={({ item }) => <Card book={item} />}
        />
        <Text style={styles.title}>Popular</Text>
        <FlatList
          contentContainerStyle={{ paddingLeft: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={books}
          renderItem={({ item }) => <PopularCard book={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F1EE',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    color: '#340763',
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
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    color: '#340763',
  },

  text: {
    fontSize: 23,
    fontWeight: 'bold',
    weight: '55%',
    lineHeight: 30,
    paddingHorizontal: 20,
    color: '#340763',
  },
  searchcontainer: {
    height: 50,
    backgroundColor: '#ffff',
    flex: 1,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    backgroundColor: '#c2956e',
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  categoriescontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  categoryitemBtn: {
    flexDirection: 'row',
    backgroundColor: 'rgbs(0,0,0,0)',
    padding: 10,
    borderRadius: 7,
    alignItems: 'center',
  },
  categorytext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2b2129',
  },
  card: {
    height: 190,
    backgroundColor: '#ffff',
    elevation: 10,
    width: 120,
    marginRight: 20,
    padding: 10,
    marginVertical: 20,
    borderRadius: 10,
  },
  cardName: {
    marginTop: 10,
    fontSize: 12,
    color: '#2b2129',
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold',
    color: '#2b2129',
    fontSize: 12,
  },
  rating: {
    fontWeight: 'bold',
    color: '#2b2129',
    fontSize: 12,
  },
  iconContainer: {
    height: 25,
    width: 25,
    backgroundColor: '#ffff',
    position: 'absolute',
    elevation: 2,
    right: 15,
    top: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popularCard: {
    height: 90,
    width: 240,
    backgroundColor: '#ffff',
    elevation: 10,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 10,
    flexDirection: 'row',
  },
});
export default home;
