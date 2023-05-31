// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './LoginScreen';

const RootStack = createStackNavigator();

function MyStack() {
  return (
    <RootStack.Navigator initialRouteName="Login">
      <RootStack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}

export default MyStack;
