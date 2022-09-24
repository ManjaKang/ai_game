import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';

function IngameButtonBackground(props) {
  const index = props.data.index;
  console.log('인게임 버튼', props);
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        width: props.data.size[0],
        height: props.data.size[1],
        top: props.data.location[0],
        left: props.data.location[1],
        borderWidth: 10,
        borderColor: 'red',
      }}
      onPress={() => {
        props.setVisible(
          props.visible.map(it =>
            it.index == index ? {...it, value: true} : it,
          ),
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  // 버튼 css, 테스트 종료후 제거할것 (화면에 빨간색 표기용)
  button: {
    borderWidth: 5,
    borderColor: 'black',
  },
});

export default IngameButtonBackground;
