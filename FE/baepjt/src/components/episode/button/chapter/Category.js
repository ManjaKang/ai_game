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
import Icon from 'react-native-vector-icons/Ionicons';

function Category(props) {
  const navigation = useNavigation();
  const isblocked = props.blocked;
  return (
    <View>
      {isblocked == 'true' ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('ChapterPage', {name: props.name})
          }>
          <ImageBackground
            // source={imageURI}
            source={props.imageUri}
            style={{
              width: '100%',
              height: '100%',
              flex: 4,
              borderRadius: 40,
            }}
            imageStyle={{borderRadius: 35}}>
            <View
              style={{
                marginTop: 5,
                alignItems: 'center',
              }}>
              <Icon name="lock-closed-outline" size={100} color="orange" />
            </View>
          </ImageBackground>
          <View style={styles.textcontainer}>
            <Text style={styles.text}> {props.name} </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('ChapterPage', {name: props.name})
          }>
          <ImageBackground
            // source={imageURI}
            source={props.imageUri}
            style={{
              width: '100%',
              height: '100%',
              flex: 4,
              borderRadius: 40,
            }}
            imageStyle={{borderRadius: 35}}></ImageBackground>
          <View style={styles.textcontainer}>
            <Text style={styles.text}> {props.name} </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 170,
    height: 170,
    borderRadius: 10,
    marginLeft: 10,
    backgroundColor: 'black',
  },
  textcontainer: {
    marginTop: 3,
    flex: 1,
  },
  text: {
    fontSize: 25,
    color: 'white',
    // 텍스트 가운데 정렬
    textAlign: 'center',
    fontFamily: 'AssetBold',
  },
});

export default Category;
