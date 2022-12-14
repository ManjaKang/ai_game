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
import IngameButtonCamera from '../../../ingame/button/camera';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
function ModalBackground(props) {
  console.log('data', props.data);
  const cameraResult = useSelector(state => state.cameraResult.value);
  return (
    props.visible[props.data].value && (
      <View style={styles.view}>
        <View style={styles.screen}>
          <ImageBackground
            source={props.dataa.bgimage}
            style={styles.imgbg}
            resizeMode="stretch">
            <TouchableOpacity
              style={styles.touchBackground}
              onPress={props.func}
              activeOpacity={1}
            />

            <View style={styles.buttonLayer}>
              <IngameButtonCamera />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                props.setVisible(
                  props.visible.map(
                    it => (true ? {...it, value: false} : it),
                    // it.index == props.data ? {...it, value: false} : it,
                  ),
                );
                props.setSearchStart(false);
              }}>
              <ImageBackground
                source={require('../../../../images/modal/button.png')}
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                resizeMode="stretch">
                <Text style={styles.text}>뒤로가기</Text>
              </ImageBackground>
            </TouchableOpacity>
            {props.cluehint &&
              props.cluehint.map(
                (hint, index) =>
                  index == props.dataa.index &&
                  hint.map((loc, ii) => (
                    <TouchableOpacity
                      key={ii}
                      style={{
                        top: loc.location[0],
                        left: loc.location[1],
                        height: 30,
                        width: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Icon name="aperture-outline" size={30} />
                    </TouchableOpacity>
                  )),
              )}
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
    fontSize: 20,
    fontFamily: 'HeirofLightRegular',
    color: 'white',
  },
  buttonLayer: {
    position: 'absolute',
    top: 5,
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default ModalBackground;
