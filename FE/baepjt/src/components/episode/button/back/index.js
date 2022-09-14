import React from 'react';
import {Button} from 'react-native';

function EpisodeButtonBack(props) {
  const onClick = () => {
    props.setShow(true);
    // let hideToShow = !props.shouldShow;
    // console.log(hideToShow);
  };
  return (
    <Button title="뒤로가기" onPress={onClick}>
      뒤로 가기
    </Button>
  );
}
export default EpisodeButtonBack;
