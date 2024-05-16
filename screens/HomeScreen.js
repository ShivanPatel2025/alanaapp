import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import NavigationBar from '../components/NavigationBar.js'; 

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Changed to a plain white background
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerImage: {
    width: '100%',
    height: 100, // Adjust according to your asset
    resizeMode: 'contain'
  },
  bannerImage: {
    width: '100%',
    height: 150, // Adjust according to your asset
    resizeMode: 'cover',
    marginBottom: 20
  },
  categoryButton: {
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  productCard: {
    width: '45%', // Nearly half the screen width minus some margin
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8
  },
  productImage: {
    width: '100%',
    height: 100, // Fixed height for consistency
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
        <Image
          source={require("../assets/banner.png")}
          style={styles.bannerImage}
        />
        <View style={styles.categoryContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Text>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
