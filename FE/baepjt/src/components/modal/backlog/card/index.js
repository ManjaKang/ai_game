import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';

function ModalBacklogCard(props) {
  console.log('나 열림');
  console.log(props);
  return (
    <View style={styles.full}>
      <ImageBackground source={require('../../../../images/backlogbg.png')}>
        {props.data.type == 0 ? (
          <View style={styles.left}>
            <Text style={styles.nameplateleft}>{props.data.name}</Text>
            <Text style={styles.textplateleft}>{props.data.text}</Text>
            <View style={styles.leftImg}>
              <Image style={styles.img} source={props.data.img} />
            </View>
          </View>
        ) : props.data.type == 1 ? (
          <View style={styles.right}>
            <Text style={styles.nameplateright}>{props.data.name}</Text>
            <Text style={styles.textplateright}>{props.data.text}</Text>
            <View style={styles.rightImg}>
              <Image style={styles.img} source={props.data.img} />
            </View>
          </View>
        ) : (
          props.data.type == 2 && (
            <View style={styles.None}>
              <Text style={styles.textplate}>{props.data.text}</Text>
            </View>
          )
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    width: '100%',
    // height: 100,
    marginVertical: 12,
  },
  nameplateleft: {
    marginLeft: '7%',
    width: '15%',
    minWidth: 50,
    padding: 3,
    marginTop: 6,
    marginHorizontal: 25,
    fontFamily: 'AssetBold',
    fontSize: 20,
    color: 'rgba(21,19, 60, 0.9)',
  },
  nameplateright: {
    marginRight: '8%',
    width: '15%',
    minWidth: 50,
    padding: 3,
    marginTop: 6,
    marginHorizontal: 25,
    fontFamily: 'AssetBold',
    fontSize: 20,
    color: 'rgba(21,19, 60, 0.9)',
  },
  textplateleft: {
    width: '85%',
    padding: 3,
    paddingTop: 15,
    height: 80,
    fontFamily: 'AssetLight',
    color: 'black',
    fontSize: 18,
    backgroundColor: 'rgba(41, 52, 98, 0.7)',
    borderRadius: 20,
  },
  textplateright: {
    width: '85%',
    padding: 3,
    paddingTop: 15,
    height: 80,
    fontFamily: 'AssetLight',
    color: 'black',
    fontSize: 18,
    backgroundColor: 'rgba(254, 177, 57, 0.7)',
    borderRadius: 20,
  },
  img: {
    height: 50,
    width: 50,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginLeft: '6%',
  },
  left: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: '8%',
  },
  right: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: '8%',
  },
  leftImg: {
    position: 'absolute',
    top: 0,
    left: '4%',
  },
  rightImg: {
    position: 'absolute',
    top: 0,
    right: '4%',
  },
  None: {
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: '4%',
  },
  name1: {
    color: 'red',
  },
  name2: {
    color: 'blue',
  },
  text1: {
    color: 'red',
  },
  text2: {
    color: 'blue',
  },
});

export default ModalBacklogCard;
