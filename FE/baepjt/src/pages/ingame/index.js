import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
  Alert,
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
import axios from 'axios';

// import e101 from '../../data/e101.js';

import importJs from './import';
import IngameButtonBackground from '../../components/ingame/button/background';
import ModalBackground from '../../components/modal/background/page';
import ModalDetectFinish from '../../components/modal/detectFinish/page';
import ModalDetectFinishButton from '../../components/modal/detectFinish/button';
import {useNavigation} from '@react-navigation/native';
import IngameTextIdle from '../../components/ingame/text/idle';
import {useSelector, useDispatch} from 'react-redux';
function IngamePage(props) {
  const userID = useSelector(state => state.id.value);
  const [nameOrder, setNameOrder] = useState(0);
  const [imageOrder, setImageOrder] = useState(0);
  const [isReady, setReady] = useState(false);
  const [toolState, setToolState] = useState(false);
  const [optionState, setOptionState] = useState(false);
  const [dialogState, setDialogState] = useState(true);
  const [titleState, setTitleState] = useState(false);
  const [backlogState, setBacklogState] = useState(false);
  const [inventoryState, setInventoryState] = useState(false);
  const [detectState, setDetectState] = useState(false);
  const items = ['1', '2'];
  const onFinish = () => setReady(true);

  //js 불러오기
  const dataa = importJs[props.route.params.order];
  const setting = dataa.setting;
  const [visible, setVisible] = useState(setting.initial);
  const clue = dataa.clue;
  const backgroundsetting = dataa.backgroundsetting;
  const cluehint = dataa.allclue;
  const scripts = dataa.scripts;
  const [characterList, setCharacterList] = useState('');
  const [itemList, setItemList] = useState([]);

  const navigation = useNavigation();
  // 클릭할 때마다 다음 대사로 넘어가기
  const orderIncrease = () => {
    if (dialogState) {
      setNameOrder(nameOrder + 1);
      setImageOrder(imageOrder + 1);
      if (scripts[imageOrder].position != null) {
        setCharacterList(scripts[imageOrder].character[0]);
      }
      if (scripts[nameOrder].text == 'end') {
        setDialogState(false);
      }
    }
    if (scripts[nameOrder + 1].text == 'gotoMain') {
      Alert.alert(`Chapter ${props.route.params.order} CLEAR!`);
      navigation.navigate('ChapterPage', {name: props.route.params.episode});
    }
  };

  // skip
  const orderSkip = () => {
    console.log('orderSkip 실행', nameOrder, imageOrder);

    let nameOrderTmp = nameOrder;
    let imageOrderTmp = imageOrder;
    if (dialogState) {
      while (true) {
        if (scripts[nameOrderTmp + 1].text == 'gotoMain') {
          setNameOrder(nameOrderTmp);
          setImageOrder(imageOrderTmp);
          break;
        }
        nameOrderTmp = nameOrderTmp + 1;
        imageOrderTmp = imageOrderTmp + 1;
        if (scripts[nameOrderTmp].text == 'end') {
          setNameOrder(nameOrderTmp);
          setImageOrder(imageOrderTmp);
          setDialogState(false);
          break;
        }
      }
    }
    if (scripts[nameOrder + 1].text == 'gotoMain') {
      Alert.alert(`Chapter ${props.route.params.order} CLEAR!`);
      navigation.navigate('ChapterPage', {name: props.route.params.episode});
    }
  };

  //아이템 불러오기
  const getItemList = async () => {
    console.log('ID 값!', userID);
    try {
      const response = await axios.get(
        'http://10.0.2.2:8080/users/items/' + userID,
      );
      if (response.status == 200) {
        setItemList(response.data);
        console.log('가져온 아이템!', response.data);
      } else {
        console.log('에에엥');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // dialog의 특정 인덱스로 보내기
  function goIndexDialog(index) {
    var iindex = scripts.findIndex(i => i.index == index);
    setNameOrder(iindex);
    setImageOrder(iindex);
    setDialogState(true);
    setDetectState(false);
  }
  const [dialog, setDialog] = useState(scripts);
  const epiImgBg = dataa.setting.chapterbg;

  useEffect(() => {
    getItemList();
    setTimeout(() => {
      onFinish();
    }, 1000);
  }, []);

  return isReady ? (
    <View>
      <ImageBackground
        source={setting.background_just[scripts[imageOrder].bg]}
        style={{height: '100%', width: '100%'}}>
        <ModalDetectFinish
          visible={detectState}
          hideModalContentWhileAnimating={true}
          setter={setDetectState}
          // D={scripts}
          func={goIndexDialog}
        />
        {scripts[nameOrder].name === 'end' ? null : (
          <ModalCharacter
            state={imageOrder}
            setstate={setImageOrder}
            data={dialog}></ModalCharacter>
        )}

        <TouchableOpacity
          style={styles.touch}
          activeOpacity={1}
          onPress={orderIncrease}></TouchableOpacity>

        {scripts[nameOrder].text === 'end' ? <IngameTextIdle /> : null}

        {scripts[nameOrder].text === 'end' ? (
          <ModalDetectFinishButton
            setstate={setDetectState}></ModalDetectFinishButton>
        ) : null}

        {scripts[nameOrder].text === 'end'
          ? backgroundsetting &&
            backgroundsetting.map((B, index) => (
              <IngameButtonBackground
                key={index}
                data={B}
                visible={visible}
                setVisible={setVisible}
              />
            ))
          : null}

        {backgroundsetting &&
          backgroundsetting.map((BC, index) => (
            <ModalBackground
              key={index}
              dataa={BC}
              data={BC.index}
              visible={visible}
              setVisible={setVisible}
              func={orderIncrease}
              cluehint={cluehint}
            />
          ))}

        <View style={styles.leftbox}>
          <IngameButtonOption setstate={setOptionState} />
        </View>

        {scripts[nameOrder].name === 'end' ? null : (
          <ModalDialog
            visible={dialogState}
            hideModalContentWhileAnimating={true}
            setter={setDialogState}
            data={dialog}
            state={nameOrder}
            setstate={setNameOrder}
            orderSkip={orderSkip}
          />
        )}

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
          items={itemList}
          itemImg={items}
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
