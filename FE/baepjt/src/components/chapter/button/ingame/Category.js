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
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('IngamePage', {
            name: props.name,
            episode: props.episode,
            order: props.order,
          })
        }>
        <Image
          source={props.imageUri}
          style={{
            width: '100%',
            height: '100%',
            borderColor: 'white',
            flex: 4,
            borderRadius: 40,
          }}></Image>
        <View style={styles.textcontainer}>
          <Text style={styles.text}>{props.name}</Text>
        </View>
      </TouchableOpacity>
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
