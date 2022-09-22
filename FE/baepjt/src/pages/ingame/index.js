import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as Progress from 'react-native-progress';
import IngameBarLoading from '../../components/ingame/bar/loading';
import IngameButtonItems from '../../components/ingame/button/items';
import IngameButtonOption from '../../components/ingame/button/option';
import IngameButtonToolbar from '../../components/ingame/button/toolbar';
import IngameTextTitle from '../../components/ingame/text/title';
import ModalBacklog from '../../components/modal/backlog/page';
import ModalDialog from '../../components/modal/dialog/page';
import ModalGotomain from '../../components/modal/gotomain/page';
import ModalInventory from '../../components/modal/inventory/page';
import ModalOption from '../../components/modal/option/page';
import ModalTool from '../../components/modal/tool/page';
import ModalCharacter from '../../components/modal/character/page';
import * as RNFS from 'react-native-fs';

// import e101 from '../../data/e101.js';

import importJs from './import';

function IngamePage(props) {
  console.log('props data', props);
  console.log('important', props.route.params.name);
  const [nameOrder, setNameOrder] = useState(0);

  const [isReady, setReady] = useState(false);
  const [toolState, setToolState] = useState(false);
  const [optionState, setOptionState] = useState(false);
  const [dialogState, setDialogState] = useState(true);
  const [titleState, setTitleState] = useState(false);
  const [backlogState, setBacklogState] = useState(false);
  const [inventoryState, setInventoryState] = useState(false);
  const items = ['1', '2'];

  const onFinish = () => setReady(true);

  //json불러오기
  const dataa = importJs[props.route.params.order];
  console.log(dataa);
  const setting = dataa.setting;
  const clue = dataa.clue;
  const backgroundsetting = dataa.backgroundsetting;
  const scripts = dataa.scripts;
  const [characterList, setCharacterList] = useState('');
  const orderIncrease = () => {
    setNameOrder(nameOrder + 1);
    if (scripts[nameOrder].position != null) {
      setCharacterList(scripts[nameOrder + 1].character[0]);
    }
    console.log('스크립트!', scripts[nameOrder]);
  };
  const [dialog, setDialog] = useState(scripts);
  console.log('다이아로그!', dialog);
  const epiImgBg = dataa.setting.chapterbg;

  useEffect(() => {
    setTimeout(() => {
      onFinish();
    }, 3000);
  });

  return isReady ? (
    <View>
      <ImageBackground
        source={epiImgBg}
        style={{width: '100%', height: '100%'}}>
        <ModalDialog
          visible={dialogState}
          hideModalContentWhileAnimating={true}
          setter={setDialogState}
          data={dialog}
          state={nameOrder}
          setstate={setNameOrder}
        />
        <ModalCharacter state={characterList}></ModalCharacter>
        <TouchableOpacity
          style={styles.touch}
          activeOpacity={1}
          onPress={orderIncrease}></TouchableOpacity>
        <View style={styles.leftbox}>
          <IngameButtonOption setstate={setOptionState} />
        </View>
        <ModalOption
          visible={optionState}
          hideModalContentWhileAnimating={true}
          setter={setOptionState}
        />

        <View style={styles.toolbox}>
          <IngameButtonToolbar state={toolState} setstate={setToolState} />
          <ModalTool
            state={toolState}
            titlestate={setTitleState}
            backlogstate={setBacklogState}
            inventorystate={setInventoryState}
          />
        </View>
        <ModalBacklog
          visible={backlogState}
          hideModalContentWhileAnimating={true}
          setter={setBacklogState}
          data={dialog}
        />

        <ModalInventory
          visible={inventoryState}
          hideModalContentWhileAnimating={true}
          setter={setInventoryState}
          items={items}
        />
        <ModalGotomain
          visible={titleState}
          hideModalContentWhileAnimating={true}
          setter={setTitleState}
        />
      </ImageBackground>
    </View>
  ) : (
    <ImageBackground source={epiImgBg} style={{width: '100%', height: '100%'}}>
      <View style={styles.loadingbox}>
        <IngameTextTitle
          name={props.route.params.name}
          episode={props.route.params.episode}
          order={props.route.params.order}
        />

        <IngameBarLoading />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  loadingbox: {
    flex: 1,
    justifyContent: 'center',
  },
  leftbox: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  toolbox: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    // alignItems: "flex-end",
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  touch: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default IngamePage;
