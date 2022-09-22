import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import IngameButtonBacklog from '../../../ingame/button/backlog';
import IngameButtonCamera from '../../../ingame/button/camera';
import IngameButtonGotomain from '../../../ingame/button/gotomain';
import IngameButtonItems from '../../../ingame/button/items';

function ModalTool(props) {
  return (
    props.state && (
      <View style={styles.view}>
        <IngameButtonGotomain setter={props.titlestate} />
        <Text style={styles.text}>메인으로</Text>
        <IngameButtonCamera />
        <Text style={styles.text}>카메라</Text>
        <IngameButtonBacklog setter={props.backlogstate} />
        <Text style={styles.text}>대화기록</Text>
        <IngameButtonItems setter={props.inventorystate} />
        <Text style={styles.text}>인벤토리</Text>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  view: {
    // width: "15%",
    height: '100%',
    paddingHorizontal: '2%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    // borderColor: 'rgba(255,123,0,1)',
    // borderLeftWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    color: 'rgba(255,255,255,1)',
    fontFamily: 'AssetBold',
  },
});

export default ModalTool;
