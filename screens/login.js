import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const Login = () => {
  const [hospitalName, setHospitalName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [pointOfContact, setPointOfContact] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    console.log("Hospital Name:", hospitalName);
    console.log("Contact Number:", `+254 ${contactNumber}`);
    console.log("Point of Contact:", `+254 ${pointOfContact}`);
    console.log("Location:", location);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>
      <Text style={styles.subtitle}>Hospital Details</Text>

      <Text style={styles.label}>Hospital Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter hospital name"
        value={hospitalName}
        onChangeText={setHospitalName}
      />

      <Text style={styles.label}>Contact Number</Text>
      <View style={styles.row}>
        <Text style={styles.prefix}>+254</Text>
        <TextInput
          style={[styles.input, styles.flex]}
          keyboardType="phone-pad"
          placeholder="Enter contact number"
          value={contactNumber}
          onChangeText={setContactNumber}
        />
      </View>

      <Text style={styles.label}>Point of Contact at Hospital</Text>
      <View style={styles.row}>
        <Text style={styles.prefix}>+254</Text>
        <TextInput
          style={[styles.input, styles.flex]}
          keyboardType="phone-pad"
          placeholder="Enter point of contact"
          value={pointOfContact}
          onChangeText={setPointOfContact}
        />
      </View>

      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter location"
        value={location}
        onChangeText={setLocation}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    padding: 10,
    marginBottom: 12,
    // flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  prefix: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  flex: {
    flex: 1,
  },
  button: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Login;




// login screen ui part is below
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// const App = () => {
//   const [mobile, setMobile] = useState('');
//   const [otp, setOtp] = useState(['', '', '', '']);

//   const handleOtpChange = (text, index) => {
//     let newOtp = [...otp];
//     newOtp[index] = text;
//     setOtp(newOtp);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>

//       <Text style={styles.label}>Mobile Number</Text>
//       <View style={styles.inputContainer}>
//         <Text style={styles.countryCode}>+254</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="1234567891"
//           placeholderTextColor="#ccc"
//           keyboardType="numeric"
//           maxLength={10}
//           value={mobile}
//           onChangeText={setMobile}
//         />
//       </View>

//       <Text style={styles.label}>OTP</Text>
//       <View style={styles.otpContainer}>
//         {otp.map((digit, index) => (
//           <TextInput
//             key={index}
//             style={styles.otpInput}
//             keyboardType="numeric"
//             maxLength={1}
//             value={digit}
//             onChangeText={(text) => handleOtpChange(text, index)}
//           />
//         ))}
//       </View>

//       <TouchableOpacity style={styles.loginButton}>
//         <Text style={styles.loginText}>Login</Text>
//       </TouchableOpacity>

//       <TouchableOpacity>
//         <Text style={styles.registerText}>Register..?</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: 'red',
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'red',
//     alignSelf: 'flex-start',
//     marginLeft: 40,
//     marginBottom: 5,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     width: '80%',
//     marginBottom: 20,
//   },
//   countryCode: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     fontSize: 16,
//     color: '#000',
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '60%',
//     marginBottom: 20,
//   },
//   otpInput: {
//     width: 40,
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#000',
//     textAlign: 'center',
//     fontSize: 18,
//     borderRadius: 5,
//   },
//   loginButton: {
//     backgroundColor: '#008CFF',
//     paddingVertical: 10,
//     paddingHorizontal: 30,
//     borderRadius: 5,
//   },
//   loginText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   registerText: {
//     marginTop: 15,
//     color: '#008CFF',
//     textDecorationLine: 'underline',
//   },
// });

// export default App;



// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello, World!</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'black',
//   },
// });

// export default App;
