import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Button, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {setId} from '../../../../../redux/login';
import {useSelector, useDispatch} from 'react-redux';

function ModalAccountButtonLogout() {
  const ID = useSelector(state => state.id.value);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const logout = async () => {
    dispatch(setId(''));
    await AsyncStorage.removeItem('userId');
    navigation.navigate('Login');
  };

  return (
    <View>
      <TouchableOpacity onPress={() => logout()}>
        <Text style={styles.text}>
          {' '}
          <Icon size={35} name="log-out" />
          로그아웃
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'AssetLight',
    color: 'black',
    fontSize: 30,
  },
});

export default ModalAccountButtonLogout;
