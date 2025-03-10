import React, { useState } from 'react'; // Import necessary modules from React
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'; // Import React Native components

// Forgot Password Screen Component
const ForgotPasswordScreen = ({ navigation }) => {
  // State variables for input fields and error messages
  const [email, setEmail] = useState(''); // Store user email input
  const [newPassword, setNewPassword] = useState(''); // Store new password input
  const [confirmPassword, setConfirmPassword] = useState(''); // Store confirm password input
  const [emailError, setEmailError] = useState(''); // Store email validation error message
  const [passwordError, setPasswordError] = useState(''); // Store password validation error message
  const [confirmPasswordError, setConfirmPasswordError] = useState(''); // Store confirm password validation error message

  // Function to validate email or phone number
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/; // Regex for validating email (only Gmail & Yahoo allowed)
    const phoneRegex = /^[6-9]\d{9}$/; // Regex for validating phone number (must start with 6-9 and be 10 digits long)

    if (!email) {
      return "⚠ Email or phone number is required."; // Return error if field is empty
    } else if (!emailRegex.test(email) && !phoneRegex.test(email)) {
      return "⚠ Enter a valid email ID (user12@gmail.com) or phone number (9876543210)."; // Return error if format is invalid
    }
    return ''; // Return empty string if validation passes
  };

  // Function to validate password strength
  const validatePassword = (password) => {
    const hasCapitalLetter = /[A-Z]/.test(password); // Check for at least one uppercase letter
    const hasSpecialCharacter = /[!@#$%^&*]/.test(password); // Check for at least one special character
    const hasNumber = /[0-9]/.test(password); // Check for at least one number
    const startsWithSpecialChar = /^[!@#$%^&*]/.test(password); // Ensure password does not start with special character

    if (password.length < 8) {
      return "⚠ Password must be at least 8 characters."; // Return error if password is too short
    } else if (startsWithSpecialChar) {
      return "⚠ Password cannot start with a special character."; // Return error if password starts with special character
    } else if (!hasCapitalLetter) {
      return "⚠ Must include an uppercase letter."; // Return error if no uppercase letter
    } else if (!hasSpecialCharacter) {
      return "⚠ Must include a special character."; // Return error if no special character
    } else if (!hasNumber) {
      return "⚠ Must include a number."; // Return error if no number is included
    }
    return ''; // Return empty string if validation passes
  };

  // Function to validate confirm password field
  const validateConfirmPassword = (confirmPassword, newPassword) => {
    return confirmPassword !== newPassword ? "⚠ Passwords do not match." : ''; // Return error if passwords do not match
  };

  // Function to handle Reset Password button press
  const handleResetPassword = () => {
    const emailErr = validateEmail(email); // Validate email input
    const passwordErr = validatePassword(newPassword); // Validate new password input
    const confirmPasswordErr = validateConfirmPassword(confirmPassword, newPassword); // Validate confirm password input

    // Update state with validation error messages
    setEmailError(emailErr);
    setPasswordError(passwordErr);
    setConfirmPasswordError(confirmPasswordErr);

    // Proceed only if there are no errors
    if (!emailErr && !passwordErr && !confirmPasswordErr) {
      Alert.alert(
        "Success",
        "Password reset successfully!",
        [{ text: "OK", onPress: () => navigation.goBack() }] // Navigate back to login page
      );

      // Clear input fields after successful password reset
      setEmail('');
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <View style={styles.container}> {/* Main container */}
      <Text style={styles.header}>Forgot Password</Text> {/* Header text */}

      {/* <Image source={require('../../assets/undraw_forgot-password_odai.png')} style={styles.logo} />  */}
      Display forgot password image

      {/* Email Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#fff"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setEmailError(validateEmail(text));
        }}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null} {/* Display email error if exists */}

      {/* New Password Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Enter new password"
        placeholderTextColor="#fff"
        secureTextEntry
        value={newPassword}
        onChangeText={(text) => {
          setNewPassword(text);
          setPasswordError(validatePassword(text));
        }}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null} {/* Display password error if exists */}

      {/* Confirm Password Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Confirm new password"
        placeholderTextColor="#fff"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => {
          setConfirmPassword(text);
          setConfirmPasswordError(validateConfirmPassword(text, newPassword));
        }}
      />
      {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null} {/* Display confirm password error if exists */}

      {/* Reset Password Button */}
      <TouchableOpacity
        style={[
          styles.button,
          email && newPassword && confirmPassword ? {} : styles.disabledButton,
        ]}
        onPress={handleResetPassword}
        disabled={!email || !newPassword || !confirmPassword} // Disable button if fields are empty
      >
        <Text style={styles.buttonText}>Reset Password</Text> {/* Button text */}
      </TouchableOpacity>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#333',
  },
  input: {
    width: '80%',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#FF3F3F',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15,
    paddingLeft: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#A9A9A9',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  logo: {
    width: 350,
    height: 250,
    marginBottom: -15,
    marginLeft: 10,
  },
});

export default ForgotPasswordScreen;