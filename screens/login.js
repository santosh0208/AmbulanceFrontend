import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

// Login screen component
const LoginScreen = ({ navigation }) => {
  // State variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [refreshKey, setRefreshKey] = useState(0); // Key to force re-render

  // Function to validate email or phone number
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/; // Only Gmail & Yahoo allowed
    const phoneRegex = /^[6-9]\d{9}$/; // Validates 10-digit phone numbers starting with 6-9

    if (!email) {
      return "⚠ Email or phone number is required.";
    } else if (!emailRegex.test(email) && !phoneRegex.test(email)) {
      return "⚠ Enter a valid email ID (user12@gmail.com) or phone number (9876543210).";
    }
    return ''; // No error
  };

  // Function to validate password strength
  const validatePassword = (password) => {
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const startsWithSpecialChar = /^[!@#$%^&*]/.test(password);

    if (password.length < 8) {
      return "⚠ Password must be at least 8 characters long.";
    } else if (startsWithSpecialChar) {
      return "⚠ Password cannot start with a special character.";
    } else if (!hasCapitalLetter) {
      return "⚠ Password must contain at least one uppercase letter.";
    } else if (!hasSpecialCharacter) {
      return "⚠ Password must contain at least one special character.";
    } else if (!hasNumber) {
      return "⚠ Password must contain at least one number.";
    }
    return ''; // No error
  };

  // Function to handle login button press
  const handleLogin = async () => {
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);

    // Update error state
    setEmailError(emailErr);
    setPasswordError(passwordErr);

    // Proceed only if there are no errors
    if (!emailErr && !passwordErr) {
      try {
        alert("Login Successful!");

        // Reset input fields
        setEmail('');
        setPassword('');

        // Force re-render of the screen
        setRefreshKey((prevKey) => prevKey + 1);
      } catch (error) {
        console.error("Error saving data:", error);
      }
    }
  };

  // Load user data when the app opens
  useEffect(() => {
    const loadUserData = async () => {
      try {

        // Set state if values exist in storage
        if (savedEmail) setEmail(savedEmail);
        setEmail('');
        if (savedPassword) setPassword(savedPassword);
        setPassword('');
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };
    loadUserData();
  }, []);

  return (
    <View key={refreshKey} style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Login Image */}
      {/* <Image source={require('../../assets/undraw_mobile-login_4ntr.png')} style={styles.logo} /> */}

      {/* Email or Phone Number Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#FFFFFF"
        autoCapitalize="none"
        keyboardType="default"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setEmailError(validateEmail(text)); // Validate while typing
        }}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      {/* Password Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#FFFFFF"
        secureTextEntry
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          setPasswordError(validatePassword(text)); // Validate while typing
        }}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      {/* Forgot Password Button */}
      <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity
        style={[styles.button, (email && password.length >= 8) ? {} : styles.disabledButton]}
        onPress={handleLogin}
        disabled={!email || password.length < 8}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the screen components
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: 'white',
  },
  title: { 
    fontSize: 50, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  input: { 
    width: '80%',
    padding: 15, 
    borderRadius: 8, 
    marginBottom: 15, 
    backgroundColor:'#FF3F3F',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15, 
    paddingLeft: 40,
  },
  button: { 
    backgroundColor: '#007BFF', 
    padding: 10, 
    borderRadius: 8, 
    width: '80%', 
    alignItems: 'center',
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 35, 
    fontWeight: 'bold'
  },
  disabledButton: {
    backgroundColor: '#A9A9A9', // Greyed out button when disabled
  },
  forgotPassword: { 
    alignSelf: 'flex-end', 
    marginRight: '10%', 
    marginBottom: 20 ,
  },
  forgotPasswordText: { 
    color: 'black', 
    fontSize: 14, 
    fontWeight: 'bold',
  },
  logo: {
    width: 250,
    height: 250,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  }
});

export default LoginScreen;
