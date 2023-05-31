import React from 'react';
import {useSelector} from 'react-redux';
import AuthStack from './AuthStack';
import MyStack from './MyStack';

export default function () {
  const {id, username, password, isLoggedIn} = useSelector(state => state.auth);

  return isLoggedIn ? <MyStack /> : <AuthStack />;
}
