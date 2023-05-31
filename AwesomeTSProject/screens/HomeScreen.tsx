import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {equate} from '../reducerConfig/slices/EquateSlice';
import {useNavigation} from '@react-navigation/native';
import {logout} from '../reducerConfig/slices/AuthSlice';

const HomeScreen = () => {
  const [text, setText] = useState();
  const focusState = useRef<any>();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    // set the focus to textinput on component load
    focusState.current.focus();
  }, []);

  function handleClearButton() {
    setText('');
    focusState.current.focus();
  }

  function handleAddButton() {
    var temp = text + '+';
    setText(temp);
    focusState.current.focus();
    console.log('text');
  }
  function handleSubButton() {
    var temp = text + '-';
    setText(temp);
    focusState.current.focus();
    console.log('text', text + '-');
  }

  function handleMulButton() {
    var temp = text + '*';
    setText(temp);
    focusState.current.focus();
    console.log('text', text + '*');
  }
  function handleDivButton() {
    var temp = text + '/';
    setText(temp);
    focusState.current.focus();
    console.log('text', text + '/');
  }

  function handleEquateButton() {
    try {
      // the first if checks for the condition whether the equation is starting with a number or not
      // the nested if checks for the condition whether the equation is ending with a number or not
      if (/^\d/.test(text)) {
        if (/[0-9]+$/.test(text)) {
          console.log(typeof eval(text), text);
          if (`${eval(text)}` === 'NaN' || eval(text) === Infinity) {
            dispatch(
              equate({
                value: '',
                expression: text,
                error: 'Division by or from Zero is incorrect',
              }),
            );
            navigation.navigate('ErrorScreen');
          } else {
            dispatch(
              equate({
                value: eval(text),
                expression: text,
                error: '',
              }),
            );
            navigation.navigate('ResultScreen');
          }
        } else {
          dispatch(
            equate({
              value: '',
              expression: text,
              error: 'The Equation should End with a number',
            }),
          );
          navigation.navigate('ErrorScreen');
        }
      } else {
        dispatch(
          equate({
            value: '',
            expression: text,
            error: 'The Equation should start with a number',
          }),
          // navigation to Error Screen
        );
        navigation.navigate('ErrorScreen');
      }
    } catch (error) {
      Alert.alert('', error);
    }
  }

  const RenderAddButton = () => {
    return (
      <View style={{flex: 1}}>
        <Button
          onPress={handleAddButton}
          mode="contained"
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            margin: 30,
          }}
          labelStyle={{fontSize: 20, color: 'white'}}>
          +
        </Button>
      </View>
    );
  };
  const RenderSubButton = () => {
    return (
      <View style={{flex: 1}}>
        <Button
          onPress={handleSubButton}
          mode="contained"
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            margin: 30,
          }}
          labelStyle={{
            fontSize: 30,
            color: 'white',
            alignSelf: 'center',
            top: 5,
          }}>
          -
        </Button>
      </View>
    );
  };
  const RenderMulButton = () => {
    return (
      <View style={{flex: 1}}>
        <Button
          onPress={handleMulButton}
          mode="contained"
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            margin: 30,
          }}
          labelStyle={{fontSize: 20, color: 'white', top: 5}}>
          *
        </Button>
      </View>
    );
  };
  const RenderDivButton = () => {
    return (
      <View style={{flex: 1}}>
        <Button
          onPress={handleDivButton}
          mode="contained"
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            margin: 30,
          }}
          labelStyle={{fontSize: 20, color: 'white'}}>
          /
        </Button>
      </View>
    );
  };
  const RenderClearButton = () => {
    return (
      <View style={{flex: 1}}>
        <Button
          mode="contained"
          style={{borderRadius: 0, margin: 10, borderRadius: 10}}
          labelStyle={{fontSize: 17, color: 'white'}}
          onPress={handleClearButton}>
          Clear
        </Button>
      </View>
    );
  };
  const RenderEquateButton = () => {
    return (
      <View style={{flex: 1}}>
        <Button
          mode="contained"
          onPress={handleEquateButton}
          style={{borderRadius: 0, margin: 10, borderRadius: 10}}
          labelStyle={{fontSize: 17, color: 'white'}}>
          Equals
        </Button>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{
          flex: 1,
          marginVertical: 80,
          marginHorizontal: 30,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: 'black',
          backgroundColor: 'white',
        }}>
        <View>
          <TextInput
            mode="outlined"
            ref={focusState}
            style={{margin: 10}}
            value={text}
            keyboardType="number-pad"
            onChangeText={text => {
              23 + 45;
              // console.log('text', text);
              var temp = text.replace(/[,' ']/gi, '');
              setText(temp);
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <RenderAddButton />
            <RenderSubButton />
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <RenderMulButton />
            <RenderDivButton />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <RenderClearButton />
          <RenderEquateButton />
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 50,
          }}>
          <Button
            onPress={() => {
              dispatch(logout());
            }}
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
            Logout
          </Button>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#008b8b',
  },
});

export default HomeScreen;
