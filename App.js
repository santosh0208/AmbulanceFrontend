import React, { useState } from 'react';
import SuperAdmin from './screens/superAdmin';
import LoginScreen from './screens/login';
import ForgotPasswordScreen from './screens/ForgotPassword';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen name="SuperAdmin" component={SuperAdmin} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
