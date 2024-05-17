import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import NavigationBar from '../components/NavigationBar.js'; 
import SearchBar from '../components/SearchBar.js';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FAFFF7",
  },
  container: {
    flex: 1,
    backgroundColor: "#FAFFF7",
  },
  headerImage: {
    width: 150, // Make logo larger
    height: 70,
    resizeMode: "contain",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 0,
    marginBottom: 10, // Added space below logo
  },
  bannerImage: {
    width: "90%",
    height: 150,
    resizeMode: "cover",
    marginTop: 20,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 17,
  },
  categoryButton: {
    marginHorizontal: 5,
    borderRadius: 13,
    paddingVertical: 6,
    paddingHorizontal: 21,
    backgroundColor: "#D9D9D9",
  },
  categoryContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    overflow: "scroll",
    color: "#616161",
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 10,
    color: "#5B7E58",
  },
  categoryText: {
    color: "#616161",
  },
  productsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 0,
    color: "#5B7E58",
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: 10,
  },
  productCard: {
    width: "44%", // This ensures 2 products per row
    margin: 10,
    // borderWidth: 1,
    // borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },
  productPrice: {
    textAlign: "left",
    fontWeight: "600",
    fontSize: 16,
    color: "#3B3B3B",
  },
  productName: {
    textAlign: "left",
    fontWeight: "500",
    fontSize: 14,
    color: "#3B3B3B",
  },
  productBrand: {
    textAlign: "left",
    fontWeight: "400",
    fontSize: 12,
    color: "#616161",
  },
});

const categories = ["Health & Wellness", "Coffee & Tea", "Beauty & Personal"];
const products = [
  { name: "5 SENSE Life of the Party", price: "$29.00", brand: "SEPHORA", image: require('../assets/demoimage1.png') },
  { name: "Assorted Chocolate Gold 4 pc.", price: "$10.00", brand: "GODIVA", image: require('../assets/demoimage2.png') },
  { name: "Wellness Boosters", price: "$15.00", brand: "Chewy", image: require('../assets/demoimage3.png') }
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
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={styles.productsTitle}>For You ></Text>
        <View style={styles.productContainer}>
          {products.map((product, index) => (
            <View key={index} style={styles.productCard}>
              <Image source={product.image} style={styles.productImage} />
              <Text style={styles.productPrice}>{product.price}</Text>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productBrand}>{product.brand}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <NavigationBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default HomeScreen;
