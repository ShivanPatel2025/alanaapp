import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import NavigationBar from '../components/NavigationBar.js'; 
import SearchBar from '../components/SearchBar.js';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFFF7',
  },
  container: {
    flex: 1,
    backgroundColor: '#FAFFF7',
  },
  headerImage: {
    width: 150, // Make logo larger
    height: 70,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10, // Added space below logo
  },
  bannerImage: {
    width: '90%',
    height: 150,
    resizeMode: 'cover',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10

  },
  categoryButton: {
    marginHorizontal: 7,
    borderWidth: 1,
    borderRadius: 15,
    padding: 8,
    backgroundColor: '#D9D9D9',
    borderColor: '#D9D9D9',
  },
  categoryContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    overflow: 'scroll',
    color: '#616161',
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
    color: '#5B7E58'
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: 10
  },
  productCard: {
    width: '44%', // This ensures 2 products per row
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden'
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover'
  },
  productText: {
    textAlign: 'center',
    marginVertical: 10
  },
  productPrice: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10
  },
  productsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
    color: '#5B7E58'
  }
});

const categories = ["Health & Wellness", "Coffee & Tea", "Beauty & Personal"];
const products = [
  { name: "5 SENSE Life of the Party", price: "$29.00", image: require('../assets/demoimage1.png') },
  { name: "Assorted Chocolate Gold 4 pc.", price: "$10.00", image: require('../assets/demoimage2.png') },
  { name: "Wellness Boosters", price: "$15.00", image: require('../assets/demoimage3.png') }
];

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Image
          source={require("../assets/alana_logo_text.png")}
          style={styles.headerImage}
        />
        <SearchBar defaultText="Search Product" />
        <Image
          source={require("../assets/banner.png")}
          style={styles.bannerImage}
        />
        <Text style={styles.categoryTitle}>Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryContainer}
        >
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Text>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={styles.productsTitle}>For You ></Text>
        <View style={styles.productContainer}>
          {products.map((product, index) => (
            <View key={index} style={styles.productCard}>
              <Image source={product.image} style={styles.productImage} />
              <Text style={styles.productText}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <NavigationBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default HomeScreen;
