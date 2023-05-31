// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ResultScreen from './ResultScreen';
import ErrorScreen from './ErrorScreen';
const Tab = createBottomTabNavigator();

function FirstScreen() {
  return (
    <Tab.Navigator initialRouteName="ScreenOne">
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Home Screen', headerShown: false}}
      />
    </Tab.Navigator>
  );
}
const RootStack = createStackNavigator();

function MyStack() {
  return (
    <RootStack.Navigator initialRouteName="First">
      <RootStack.Screen
        name="First"
        component={FirstScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="ResultScreen"
        component={ResultScreen}
        options={{title: 'Result Screen', headerShown: false}}
      />
      <RootStack.Screen
        name="ErrorScreen"
        component={ErrorScreen}
        options={{title: 'Error Screen', headerShown: false}}
      />
    </RootStack.Navigator>
  );
}

export default MyStack;
