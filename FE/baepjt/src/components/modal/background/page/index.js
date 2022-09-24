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
  console.log('모달 백그라운드', props.dataa.bgimage);
  console.log(props.data);
  return (
    props.visible[props.data].value && (
      <View style={styles.view}>
        <View style={styles.screen}>
          <ImageBackground source={props.dataa.bgimage} style={styles.imgbg}>
            <Button
              title="뒤로가기"
              style={{
                borderColor: 'blue',
                borderWidth: 3,
                position: 'absolute',
                top: 3,
                right: 3,
                width: 20,
                height: 20,
              }}
              onPress={() => {
                props.setVisible(
                  props.visible.map(it =>
                    it.index == props.data ? {...it, value: false} : it,
                  ),
                );
              }}></Button>
            <Text>{props.data}</Text>
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
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgbg: {
    width: '100%',
    height: '100%',
  },
  screen: {
    // 실제적으로 보이는 범위! css 수정할것!
    width: '80%',
    height: '60%',
    backgroundColor: 'gray',
    marginBottom: '15%',

    borderColor: 'red',
    borderWidth: 1,
  },
});

export default ModalBackground;
