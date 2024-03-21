import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  logo: {
    alignSelf: 'center',
    height: 120,
    resizeMode: 'contain',
    marginTop: 60,
    marginBottom: 40,
  },
  titleText: {
    fontSize: 30,
    color: '#DAA520', // Old Gold
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#333', // Dark grey
    borderRadius: 25,
    paddingHorizontal: 20,
    color: '#DAA520', // Old Gold
    marginBottom: 20,
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: '#DAA520', // Old Gold
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // Shadow for Android
    marginBottom: 20,
  },
  loginText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  signUpText: {
    color: '#DAA520', // Old Gold
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 40,
  },
  exploreButton: {
    borderColor: '#DAA520',
    borderWidth: 1,
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exploreText: {
    color: '#DAA520',
    fontSize: 18,
  },
});

function WelcomeScreen({ navigation }) {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../assets/CoatOfArms.png')} style={styles.logo} />
      <Text style={styles.titleText}>Welcome to Acacia!</Text>
      <TextInput
        style={styles.input}
        placeholder="Username/Email"
        placeholderTextColor='#DAA520'
        value={userEmail}
        onChangeText={(text) => setUserEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor='#DAA520'
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          // Login logic here
        }}
      >
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.signUpText}>
        New to Acacia? <Text style={{ color: 'white', textDecorationLine: 'underline' }}>Sign Up</Text>
      </Text>
      <TouchableOpacity
        style={styles.exploreButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.exploreText}>Explore Acacia</Text>
      </TouchableOpacity>
    </View>
  );
}

export default WelcomeScreen;
