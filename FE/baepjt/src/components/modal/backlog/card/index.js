import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';

function ModalBacklogCard(props) {
  return (
    <View style={styles.full}>
      <ImageBackground
        source={require('../../../../images/modal/backlogbg.png')}>
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
              <Text style={styles.textplatenone}>{props.data.text}</Text>
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
  },
  // 이름 css
  nameplateleft: {
    marginLeft: '7%',
    width: '15%',
    marginTop: 6,
    marginHorizontal: 25,
    fontFamily: 'AssetBold',
    fontSize: 20,
    color: 'black',
  },
  nameplateright: {
    marginRight: '8%',
    width: '15%',
    marginTop: 6,
    marginHorizontal: 25,
    fontFamily: 'AssetBold',
    fontSize: 20,
    color: 'black',
  },
  // 대사css
  textplatenone: {
    marginTop: '3%',
    width: '80%',
    marginVertical: 3,
    paddingTop: 15,
    height: 80,
    fontFamily: 'AssetLight',
    color: 'black',
    fontSize: 18,
    backgroundColor: 'rgba(254, 177, 57, 0.7)',
    borderRadius: 20,
    textAlign: 'center',
  },
  textplateleft: {
    marginLeft: '3%',
    width: '80%',
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
    backgroundColor: 'rgba(32, 83, 117, 0.7)',
    borderRadius: 20,
  },
  // 이미지 css
  img: {
    height: 50,
    width: 50,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginLeft: '6%',
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
  // 이미지, 이름, 대사를 위에있는 view css
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
  None: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  // name1: {
  //   color: 'red',
  //   borderColor: 'red',
  //   borderWidth: 1,
  // },
  // name2: {
  //   color: 'blue',
  // },
  // text1: {
  //   color: 'red',
  // },
  // text2: {
  //   color: 'blue',
  // },
});

export default ModalBacklogCard;
