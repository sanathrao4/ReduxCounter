import {useNavigation} from '@react-navigation/native';
import * as React from 'react';

import {View, Text} from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper';
import {useSelector} from 'react-redux';

const ResultScreen = () => {
  const finalExpression = useSelector(state => state.equate.expression);
  const result = useSelector(state => state.equate.value);
  console.log('exp', typeof result);
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 80,
        marginHorizontal: 40,
        borderRadius: 10,
        borderWidth: 0.4,
        borderColor: 'black',
      }}>
      <View>
        <TextInput
          mode="outlined"
          label="Your Equation"
          style={{margin: 10}}
          value={`${finalExpression}`}
          editable={false}
        />
        <TextInput
          mode="outlined"
          label="Your Result"
          style={{margin: 10}}
          value={`${result}`}
          editable={false}
        />
      </View>

      <Button
        mode="contained"
        style={{borderRadius: 0, margin: 10}}
        onPress={() => {
          navigation.goBack();
        }}>
        Go Back
      </Button>
    </View>
  );
};

export default ResultScreen;
