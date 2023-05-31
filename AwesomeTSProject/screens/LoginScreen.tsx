import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {useEffect, useState} from 'react';

import {View, Text, KeyboardAvoidingView, Platform, Alert} from 'react-native';
import {Button, Card, HelperText, TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import users from './userList';
import {login} from '../reducerConfig/slices/AuthSlice';

const LoginScreen = () => {
  const [userList, setUserList] = useState([...users]);

  const [email, setEmail] = useState('testAccount@gmail.com');
  const [password, setPassword] = useState('test123');

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const dispatch = useDispatch();

  const checkUserEmail = () => {
    var bool = false;
    userList.forEach((item, index) => {
      console.log('item', item);
      if (email == item.email) {
        return true;
      }
    });
    return bool;
  };
  const checkUserPassword = () => {
    var bool = false;
    // can be checked by has own property with username to reduce computation time
    userList.forEach((item, index) => {
      if (item.email === email) {
        if (password === item.password) {
          bool = true;
        }
      }
    });

    return bool;
  };

  const checkLogin = () => {
    var bool = false;
    userList.map(element => {
      if (element.email == email) {
        if (element.password == password) {
          bool = true;
          return;
        }
      }
    });
    return bool;
  };

  const handleLogin = () => {
    let isUser: boolean = checkLogin();
    isUser
      ? dispatch(
          login({
            email: email,
            password: password,
            isLoggedIn: true,
          }),
        )
      : Alert.alert('', 'Invalid Credentials');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#008b8b'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          flex: 1,
          borderRadius: 15,
          borderColor: 'black',
          borderWidth: 2.5,
          marginVertical: 250,
          marginHorizontal: 40,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flex: 0.5,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              letterSpacing: 5,
              color: 'black',
              top: 5,
            }}>
            WELCOME!
          </Text>
          <Text
            style={{
              fontSize: 18,
              top: 10,
              fontWeight: 'bold',
              letterSpacing: 5,
              color: 'black',
            }}>
            Calculator App
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'space-evenly',
          }}>
          <TextInput
            mode="outlined"
            label="Email"
            placeholder="Enter a valid email"
            style={{margin: 10}}
            value={email}
            onChangeText={text => {
              setEmail(text);
            }}
          />

          <TextInput
            label="Password"
            textContentType="password"
            secureTextEntry={secureTextEntry}
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
            mode="outlined"
            // right={
            //   <TextInput.Icon
            //     icon="eye"
            //     onPress={() => {
            //       setSecureTextEntry(!secureTextEntry);
            //       return false;
            //     }}
            //   />
            // }
            style={{margin: 10}}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Button
            onPress={handleLogin}
            mode="contained"
            style={{
              flex: 1,
              borderRadius: 5,
              marginHorizontal: 20,
            }}
            labelStyle={{
              fontSize: 16,
              letterSpacing: 3,
              fontWeight: 'bold',
              color: 'white',
              alignSelf: 'center',
            }}>
            Login
          </Button>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
