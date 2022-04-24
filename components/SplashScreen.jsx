
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useSelector, useDispatch } from "react-redux";

const SplashScreen = ({navigation}) => {
  const user_info = useSelector((state) => state.auth.SearchValue);


  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('user_id').then((value) => {
        navigation.navigate(value === null ? 'RegisterUser' : 'Users')
      }
      );
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Ionicons
          name={"cut-outline"}
          size={100}
          color={"#fff"}
          style={{ marginLeft: 20, marginTop: 3 }}
        />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});