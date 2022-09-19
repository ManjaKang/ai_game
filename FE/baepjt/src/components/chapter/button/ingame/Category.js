import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

function Category(props) {
  const navigation = useNavigation();
  console.log("prop ready",props.episode, props.name)
  return (
    <View
      Style={{
        height: 200,
        width: 200,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: '#dddddd',
      }}>
      <View style={{flex: 2}}>
        <TouchableOpacity
          style={{
            borderWidth: 3,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 160,
            height: 160,
            backgroundColor: '#fff',
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate('IngamePage', {name: props.name, episode: props.episode})}>
        {/* //   onPress={() => navigation.navigate('IngamePage', {name: props.name}, {episode: props.episode})}> */}
          <Image
            source={{
              uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fen.pimg.jp%2F060%2F049%2F526%2F1%2F60049526.jpg&imgrefurl=https%3A%2F%2Fkr.pixtastock.com%2Fillustration%2F60049526&tbnid=AzUf1vZX8HMbxM&vet=12ahUKEwj9wZ7xyJP6AhUEVJQKHd64BD4QMygDegUIARDNAQ..i&docid=RIVGhZOqVlrG8M&w=450&h=389&q=%ED%9A%8C%EC%8B%9D%20%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8&hl=ko&ved=2ahUKEwj9wZ7xyJP6AhUEVJQKHd64BD4QMygDegUIARDNAQ',
              cache: 'only-if-cached',
            }}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover',
            }}></Image>
          <View style={{flex: 1, marginTop: 70, paddingLeft: 10}}>
            <Text style={{color: 'black', fontSize: 20, textAlign: 'center'}}>
              {props.name}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Category;
