import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AndroidDocumentPicker from 'react-native-android-document-picker';

const App = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [role, setRole] = useState('');
  const [assignedAmbulance, setAssignedAmbulance] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const validateEmail = (email) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };

  const validateMobile = (mobile) => {
    return /^\d{10}$/.test(mobile);
  };

  const handleFileUpload = async () => {
    try {
      const res = await AndroidDocumentPicker.pick({
        type: [AndroidDocumentPicker.types.xlsx, AndroidDocumentPicker.types.xls],
      });
      setSelectedFile(res);
    } catch (err) {
      if (AndroidDocumentPicker.isCancel(err)) {
        Alert.alert('Cancelled', 'File selection was cancelled');
      } else {
        Alert.alert('Error', 'Unknown error occurred');
      }
    }
  };

  const handleCreateUser = () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }
    if (!validateMobile(mobile)) {
      Alert.alert('Invalid Mobile', 'Please enter a valid 10-digit mobile number');
      return;
    }
    Alert.alert('Success', 'User created successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New User</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        keyboardType="numeric"
        maxLength={10}
        value={mobile}
        onChangeText={setMobile}
      />
      
      <TextInput
        style={styles.input}
        placeholder="ID Number"
        value={idNumber}
        onChangeText={setIdNumber}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Role (Driver or Call Operator)"
        value={role}
        onChangeText={setRole}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Assigned Ambulance"
        value={assignedAmbulance}
        onChangeText={setAssignedAmbulance}
      />
      
      <TouchableOpacity style={styles.uploadButton} onPress={handleFileUpload}>
        <Text style={styles.uploadText}>{selectedFile ? 'File Selected' : 'Bulk Upload'}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.createButton} onPress={handleCreateUser}>
        <Text style={styles.createText}>Create New User</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  uploadButton: {
    backgroundColor: '#f44336',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  uploadText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createButton: {
    backgroundColor: '#d32f2f',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  createText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
