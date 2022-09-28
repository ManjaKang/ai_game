import React from 'react';
import {ImageBackground} from 'react-native';
function IngameBackground(props) {
  return (
    <ImageBackground
      source={props.setting.background_just[props.scripts[props.state].bg]}
      style={{width: '100%', height: '100%'}}></ImageBackground>
  );
}

export default IngameBackground;
