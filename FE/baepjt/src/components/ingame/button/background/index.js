import React, {useEffect} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {stat} from 'react-native-fs';
import SoundPlayer from 'react-native-sound-player';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {setbgValue} from '../../../../redux/background';
function IngameButtonBackground(props) {
  const index = props.data.index;
  const backGround = useSelector(state => state.backGround.value);
  const dispatch = useDispatch();
  const sound = useSelector(state => state.sound);
  console.log('인덱스 번호', index);
  return props.chapterOrder == 3 && index == 2 ? (
    <TouchableOpacity
      style={{
        position: 'absolute',
        width: props.data.size[0],
        height: props.data.size[1],
        top: props.data.location[0],
        left: props.data.location[1],
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 10,
        // borderColor: 'red',
      }}
      onPress={() => {
        props.setSearchStart(true);
        dispatch(setbgValue(index));
        props.setVisible(
          props.visible.map(it =>
            it.index == index ? {...it, value: true} : it,
          ),
        );
        dispatch(setbgValue(index));
        props.goIndexDialog(7);
      }}>
      <Icon name="search" size={30} style={styles.icon}></Icon>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={{
        position: 'absolute',
        width: props.data.size[0],
        height: props.data.size[1],
        top: props.data.location[0],
        left: props.data.location[1],
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 10,
        // borderColor: 'red',
      }}
      onPress={() => {
        if (props.chapterOrder == 4 && (index == 0 || index == 1)) {
          SoundPlayer.playSoundFile('door', 'mp3');
          SoundPlayer.setVolume(sound.value.sfx / 100);
        }
        props.setSearchStart(true);
        dispatch(setbgValue(index));
        props.setVisible(
          props.visible.map(it =>
            it.index == index ? {...it, value: true} : it,
          ),
        );

        dispatch(setbgValue(index));
      }}>
      <Icon name="search" size={30} style={styles.icon}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // 버튼 css, 테스트 종료후 제거할것 (화면에 빨간색 표기용)
  button: {
    borderWidth: 5,
    borderColor: 'black',
  },
  icon: {
    color: 'rgba(255, 255, 204, 1)',
  },
});

export default IngameButtonBackground;
