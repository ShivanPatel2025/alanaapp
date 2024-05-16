import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFFF7', // Green White
    padding: 20,
    justifyContent: 'space-between',  // Ensure there's space distribution,    
  },
  logo: {
    alignSelf: 'center',
    height: 126,
    resizeMode: 'contain',
    marginTop: 60,
    marginBottom: 0,
  },
  titleText: {
    fontSize: 22,
    color: '#648B61', // Dark Green
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 0,
    fontFamily: 'Futura',


  },
  sloganText: {
    fontSize: 16,
    color: '#616161', // Dark Gray
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 60,
    fontFamily: 'Futura',


  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F1F1F1', // Dark grey
    borderRadius: 15,
    paddingHorizontal: 20,
    color: '#616161', // Light grey
    marginBottom: 15,
    marginTop: 0,
    fontSize: 18,
    fontFamily: 'Futura',
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#5B7E58', // Dark Green
    fontWeight: '400',
    textAlign: 'right',
    marginBottom: 60,
    fontFamily: 'Futura',

  },
  loginButton: {
    backgroundColor: '#648B61', // Dark Green
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // Shadow for Android
    marginBottom: 20,
    fontFamily: 'Futura',

  },
  loginText: {
    color: '#F9FBF8', // Green Offwhite
    fontWeight: "450",
    fontSize: 18,
    fontFamily: 'Futura',

  },
  signUpText: {
    color: '#648B61', // Dark Green
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 40,
    fontFamily: 'Futura',

  },
  orLoginWithText: {
    fontSize: 16,
    color: '#616161', // Dark Grey
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Futura',

  },
  signInLogo: {
    width: 45,
    height: 45,
    marginHorizontal: 12.5,
  },
  signInLogoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 90, // add some bottom margin
  }
});

function WelcomeScreen({ navigation }) {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/alana_logo_no_text.png')} style={styles.logo} />
        <Text style={styles.titleText}>Alana</Text>
        <Text style={styles.sloganText}>Where Authenticity Matters</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor='#616161'
          value={userEmail}
          onChangeText={(text) => setUserEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor='#616161'
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate('Home');
          }}
        >
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.signUpText}>
          New to Alana? <Text style={{ color: '#648B61', textDecorationLine: 'underline' }}>Sign Up</Text>
        </Text>
        <Text style={styles.orLoginWithText}>Or Login With</Text>
      </View>
      <View style={styles.signInLogoContainer}>
        <Image source={require('../assets/instagram.png')} style={styles.signInLogo} />
        <Image source={require('../assets/google.png')} style={styles.signInLogo} />
        <Image source={require('../assets/facebook.png')} style={styles.signInLogo} />
      </View>
    </View>
  );
}

export default WelcomeScreen;
