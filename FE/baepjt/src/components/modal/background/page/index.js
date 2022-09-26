import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button,
  ImageBackground,
} from 'react-native';

function ModalBackground(props) {
  return (
    props.visible[props.data].value && (
      <View style={styles.view}>
        <View style={styles.screen}>
          <ImageBackground source={props.dataa.bgimage} style={styles.imgbg}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                props.setVisible(
                  props.visible.map(it =>
                    it.index == props.data ? {...it, value: false} : it,
                  ),
                );
              }}>
              <ImageBackground
                source={require('../../../../images/modal/button.png')}
                style={{width: '100%', height: '100%'}}>
                <Text style={styles.text}>뒤로가기</Text>
              </ImageBackground>
            </TouchableOpacity>

            {/* <Text>{props.data}</Text> */}
          </ImageBackground>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  view: {
    // width, height, justify, align 이외 값만 변경할것!
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgbg: {
    width: '100%',
    height: '100%',
  },
  screen: {
    // 실제적으로 보이는 범위! css 수정할것!
    width: '100%',
    height: '100%',
    backgroundColor: 'gray',
  },
  button: {
    borderRadius: 50,
    position: 'absolute',
    bottom: '5%',
    right: '5%',
    width: '21%',
    height: '16%',
  },
  text: {
    marginTop: '15%',
    marginLeft: '21%',
    fontSize: 20,
    fontFamily: 'HeirofLightRegular',
  },
});

export default ModalBackground;
