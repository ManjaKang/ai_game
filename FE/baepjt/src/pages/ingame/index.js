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
import iscamera, {setcameraValue} from '../../redux/iscamera';
import { setEpisode } from '../../redux/episode';
import itemdata from './itemdata';
import SoundPlayer from 'react-native-sound-player';
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
  const [searchStart, setSearchStart] = useState(false);
  const items = importJs[0];
  const [chapter3, setChapter3] = useState(false);
  const onFinish = () => setReady(true);

  console.log(userID);
  //js ????????????
  const dataa = importJs[props.route.params.order];
  const chapterOrder = props.route.params.order;
  const setting = dataa.setting;
  const [visible, setVisible] = useState(setting.initial);
  const clue = dataa.clue;
  const backgroundsetting = dataa.backgroundsetting;
  const cluehint = dataa.allclue;
  const scripts = dataa.scripts;
  const [characterList, setCharacterList] = useState('');
  const cameraResult = useSelector(state => state.cameraResult.value);
  const itemData = itemdata;

  const incameralist = [];
  const modalcluelist = [];
  const backGround = useSelector(state => state.backGround.value);
  const dispatch = useDispatch();
  const isCamera = useSelector(state => state.isCamera.value);

  const [itemList, setItemList] = useState([]);
  const sound = useSelector(state => state.sound);
  // const [itemList, setItemList] = useState([
  //   {
  //     idx: 0,
  //     name: '?????? ????????? ?????? ???',
  //     userId: 'aaa',
  //     description:
  //       '????????? ?????? ????????? ?????? ?????? ?????????. ?????? ????????? ?????? ?????? ??? ????????? ?????? ?????????.',
  //     index: 1, // ???????????????
  //     episode: 1,
  //     chapter: 1,
  //   },
  //   {
  //     idx: 0,
  //     name: '???????????? ????????????',
  //     userId: 'aaa',
  //     description:
  //       '???????????? ?????? ???????????? ???????????? ?????? ????????????. ???????????? ??????????????? ?????? ?????? ????????? ?????????.',
  //     index: 2,
  //     episode: 1,
  //     chapter: 1,
  //   },
  // ]);

  const navigation = useNavigation();
  // ????????? ????????? ?????? ????????? ????????????
  const orderIncrease = () => {
    if (dialogState) {
      setNameOrder(nameOrder + 1);
      setImageOrder(imageOrder + 1);
      SoundPlayer.stop();
      if (scripts[imageOrder].position != null) {
        setCharacterList(scripts[imageOrder].character[0]);
      }
      if (scripts[nameOrder].text == 'end') {
        setDialogState(false);
      }
      if (scripts[nameOrder].name != 'end') {
        updateBacklog(nameOrder);
      }
    }
    if (
      scripts[imageOrder + 1].audio != undefined &&
      scripts[imageOrder + 1].audio != ''
    ) {
      SoundPlayer.setVolume(sound.value.voice / 100);
      SoundPlayer.playSoundFile(scripts[imageOrder + 1].audio, 'mp3');
    }
    if (scripts[nameOrder + 1].text == 'gotoMain') {
      // chapterClear();
      Alert.alert(`Chapter ${props.route.params.order} CLEAR!`);
      chapterClear();
      // navigation.navigate('ChapterPage', {name: props.route.params.episode});
    }
    if (scripts[nameOrder].getItem > 0) {
      const findNumber = scripts[nameOrder].getItem;
      if (itemList.find(F => F.index == findNumber)) {
        console.log('?????? ?????? ??????????????????');
      } else {
        setItemList(item => [
          ...item,
          {
            idx: itemData[findNumber].idx,
            name: itemData[findNumber].name,
            userId: userID,
            description: itemData[findNumber].description,
            index: itemData[findNumber].index,
            episode: itemData[findNumber].episode,
            chapter: itemData[findNumber].chapter,
          },
        ]);
        console.log('?????? ????????? ????????????!', itemList);
      }
    }
  };

  //?????? ??????????????? ????????? ??????, ?????????????????? ??????
  const chapterClear = async () => {
    try {
      const response = await axios.post(
        'http://j7e102.p.ssafy.io:8080/users/items',
        {
          userId: userID,
          episode: props.route.params.episodeNumber,
          chapter: props.route.params.order,
          items: itemList,
        },
      );
      if (response.status == 200) {
        console.log('????????????');
        SoundPlayer.setVolume(sound.value.bgm);
        SoundPlayer.playSoundFile('main', 'mp3');
        navigation.navigate('ChapterPage', {name: props.route.params.episode});
      } else {
        console.log('????????????!');
        setNameOrder(nameOrder - 1);
        setImageOrder(imageOrder - 1);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //????????? ????????????

  const orderSkip = () => {
    console.log('orderSkip ??????', nameOrder, imageOrder);

    let nameOrderTmp = nameOrder;
    let imageOrderTmp = imageOrder;
    if (dialogState) {
      while (true) {
        if (scripts[nameOrderTmp].name != 'end') {
          updateBacklog(nameOrderTmp);
        }
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
      chapterClear();
      // navigation.navigate('ChapterPage', {name: props.route.params.episode});
    }
  };

  // ????????? ????????????
  const updateBacklog = index => {
    // console.log("??????????????????",index,backlogList.find(i=>i==index));
    if (backlogList.find(idx => idx == index)) {
      // console.log(backlogList.find(idx=>idx==index));
      return;
    } else {
      setBacklogDialog(backlogDialog => [
        ...backlogDialog,
        {
          name: dialog[index].name,
          text: dialog[index].text,
          img: dialog[index].img,
          type: dialog[index].type,
        },
      ]);
      setBacklogList(backlogList => [...backlogList, index]);
    }
  };

  // ????????? ??????
  const getItemList = async () => {
    try {
      const response = await axios.get(
        'http://j7e102.p.ssafy.io:8080/users/items/' + userID,
      );
      if (response.status == 200) {
        setItemList(response.data);
        console.log('????????? ?????????!', response.data);
      } else {
        // console.log('?????????');
      }
    } catch (error) {
      // console.log(error);
    }
  };

  // dialog??? ?????? ???????????? ?????????
  function goIndexDialog(index) {
    var iindex = scripts.findIndex(i => i.index == index);
    setNameOrder(iindex);
    setImageOrder(iindex);
    setDialogState(true);
    setDetectState(false);
    if (scripts[iindex].sfx != undefined && scripts[iindex].sfx != '') {
      SoundPlayer.setVolume(sound.value.sfx / 100);
      SoundPlayer.playSoundFile(scripts[iindex].sfx, 'mp3');
    }
  }
  const [dialog, setDialog] = useState(scripts);
  const [backlogDialog, setBacklogDialog] = useState([]);
  const [backlogList, setBacklogList] = useState([]);
  const epiImgBg = dataa.setting.chapterbg;
  const [itemChecker, setItemChecker] = useState(false);

  useEffect(() => {
    if (itemChecker == false) {
      getItemList();
      setItemChecker(true);
      console.log('????????? ???????????? ??????');
    }
    // isCamera??? True ?????? cameralist??? cluelist ???????????? ??? ?????? ?????? ???????????? ????????????
    if (isCamera == true) {
      // ??? chapter??? cluelist
      modalcluelist.push(clue[backGround].map(c => c.name));
      // ???????????? ?????? ????????? list
      incameralist.push(cameraResult.map(r => r.name));
      // ????????? ??????
      const cluefinded = modalcluelist[0].filter(x =>
        incameralist[0].includes(x),
      );
      if (cluefinded[0] == undefined) {
        // ???????????? ?????????
        goIndexDialog(backGround * 100 + 11);
      } else {
        // ???????????? ?????????
        // ???????????? ????????? ?????? - ????????? ?????? ??????
        const realclue = cluefinded[0];
        clue[backGround].map(c => {
          // isdetected??? 0??????(?????? ??????????????????)
          if (c.name == realclue && c.isdetected == 0) {
            const s_index = c.start_index[0];
            goIndexDialog(s_index);
            c.isdetected = 1;
          } else if (c.name == realclue && c.isdetected == 1) {
            // isdetected??? 1??????(?????? ???????????????)
            const e_index = c.start_index[1];
            goIndexDialog(e_index);
          }
        });
      }
      // isCamera??? ?????? ?????? ??? ?????? ?????? isCamera??? false??? ????????????
      dispatch(setcameraValue(false));
    }

    setTimeout(() => {
      onFinish();
    }, 1000);
    // if ??? ????????? isCamera == true; goIndex() ??????
    // isCamera
  });

  useEffect(() => {
    setTimeout(() => {
      if (scripts[0].audio != undefined && scripts[0].audio != '') {
        SoundPlayer.setVolume(sound.value.voice / 100);
        SoundPlayer.playSoundFile(scripts[0].audio, 'mp3');
      }
      dispatch(setEpisode({episode:props.route.params.number ,chapter:props.route.params.order}))
    }, 1000);
  }, []);

  return isReady ? (
    // ?????? ?????????
    searchStart == false ? (
      <View>
        <ImageBackground
          source={setting.background_just[scripts[imageOrder].bg]}
          style={{height: '100%', width: '100%'}}
          resizeMode="stretch">
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
            style={styles.touches}
            activeOpacity={1}
            onPress={orderIncrease}></TouchableOpacity>

          {scripts[nameOrder].text === 'end' ? <IngameTextIdle /> : null}

          {scripts[nameOrder].text === 'end' ? (
            <ModalDetectFinishButton
              setstate={setDetectState}></ModalDetectFinishButton>
          ) : null}

          {scripts[nameOrder].text === 'end'
            ? chapterOrder == 3
              ? backgroundsetting &&
                backgroundsetting.map((B, index) => (
                  <IngameButtonBackground
                    key={index}
                    data={B}
                    visible={visible}
                    setVisible={setVisible}
                    searchStart={searchStart}
                    setSearchStart={setSearchStart}
                    chapter3={chapter3}
                    setChapter3={setChapter3}
                    chapterOrder={chapterOrder}
                    goIndexDialog={goIndexDialog}
                  />
                ))
              : backgroundsetting &&
                backgroundsetting.map((B, index) => (
                  <IngameButtonBackground
                    key={index}
                    data={B}
                    visible={visible}
                    setVisible={setVisible}
                    searchStart={searchStart}
                    setSearchStart={setSearchStart}
                    chapterOrder={chapterOrder}
                  />
                ))
            : null}

          <View style={styles.toolbox}>
            <IngameButtonToolbar state={toolState} setstate={setToolState} />
            <ModalTool
              state={toolState}
              titlestate={setTitleState}
              backlogstate={setBacklogState}
              inventorystate={setInventoryState}
            />
          </View>
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
                isdialog={dialogState}
                setSearchStart={setSearchStart}
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
              chapterOrder={chapterOrder}
            />
          )}

          <ModalOption
            visible={optionState}
            hideModalContentWhileAnimating={true}
            setter={setOptionState}
          />

          <ModalBacklog
            visible={backlogState}
            hideModalContentWhileAnimating={true}
            setter={setBacklogState}
            data={backlogDialog}
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
      <View>
        <ImageBackground
          source={setting.background_just[scripts[imageOrder].bg]}
          style={{height: '100%', width: '100%'}}
          resizeMode="stretch">
          <ModalDetectFinish
            visible={detectState}
            hideModalContentWhileAnimating={true}
            setter={setDetectState}
            // D={scripts}
            func={goIndexDialog}
          />

          {scripts[nameOrder].text === 'end' ? <IngameTextIdle /> : null}

          {scripts[nameOrder].text === 'end' ? (
            <ModalDetectFinishButton
              setstate={setDetectState}></ModalDetectFinishButton>
          ) : null}

          {scripts[nameOrder].text === 'end'
            ? chapterOrder == 3
              ? backgroundsetting &&
                backgroundsetting.map((B, index) => (
                  <IngameButtonBackground
                    key={index}
                    data={B}
                    visible={visible}
                    setVisible={setVisible}
                    searchStart={searchStart}
                    setSearchStart={setSearchStart}
                    chapter3={chapter3}
                    setChapter3={setChapter3}
                    chapterOrder={chapterOrder}
                  />
                ))
              : backgroundsetting &&
                backgroundsetting.map((B, index) => (
                  <IngameButtonBackground
                    key={index}
                    data={B}
                    visible={visible}
                    setVisible={setVisible}
                    searchStart={searchStart}
                    setSearchStart={setSearchStart}
                    chapterOrder={chapterOrder}
                  />
                ))
            : null}
          {/* <View style={styles.toolbox}>
            <IngameButtonToolbar state={toolState} setstate={setToolState} />
            <ModalTool
              state={toolState}
              titlestate={setTitleState}
              backlogstate={setBacklogState}
              inventorystate={setInventoryState}
            />
          </View> */}
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
                isdialog={dialogState}
                setSearchStart={setSearchStart}
              />
            ))}

          {scripts[nameOrder].name === 'end' ? null : (
            <ModalCharacter
              state={imageOrder}
              setstate={setImageOrder}
              data={dialog}></ModalCharacter>
          )}
          <TouchableOpacity
            style={styles.touches}
            activeOpacity={1}
            onPress={orderIncrease}></TouchableOpacity>

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
          <View style={styles.leftbox}>
            <IngameButtonOption setstate={setOptionState} />
          </View>

          <ModalOption
            visible={optionState}
            hideModalContentWhileAnimating={true}
            setter={setOptionState}
          />

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
    )
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
  touches: {
    position: 'absolute',
    width: '100%',
    height: '60%',
    right: '0%',
    bottom: '20%',
  },
});

export default IngamePage;
