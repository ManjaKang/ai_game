import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';

type Gamestarttype = {
  name: string;
};
function Gamestart({name}: Gamestarttype) {
  return (
    <div>
      <h1>안녕! {name}</h1>
    </div>
  );
}
export default Gamestart;
