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

import importJs from '../ingame/import';
import FinaleimportJs from './import';
import IngameButtonBackground from '../../components/ingame/button/background';
import ModalBackground from '../../components/modal/background/page';
import ModalDetectFinish from '../../components/modal/detectFinish/page';
import ModalDetectFinishButton from '../../components/modal/detectFinish/button';
import {useNavigation} from '@react-navigation/native';
import IngameTextIdle from '../../components/ingame/text/idle';
import { useSelector, useDispatch } from 'react-redux';
import FinaleModalSuspect from '../../components/finale/modal/suspect';
function FinalePage(props) {
  console.log(props.route.params);
  console.log("피날레 페이지입니다");
  const userID = useSelector((state) => state.id.value);
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
  const [suspectState, setSuspectState] = useState(false);
  const [clueindex, setClueindex] = useState(0);
  const [trueendcode, setTrueEndCode] = useState(0);
  const items = importJs[0];
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

  const FinaleData = FinaleimportJs;
  const [suspectImg,setSuspectImg] = useState(FinaleData.suspectimg);
  const [suspectList,setSuspectList] = useState(FinaleData.suspectList);
  const [itemList,setItemList] = useState([]);

  const checkSelectable = () => {
    for (var i=0;i<FinaleData.suspectcount;i++) {
        var k=0;
        FinaleData.selectable[i].clue.map((data) => {
            console.log(i," 번 ",data);
            if (itemList.find(itd=>itd.index==data)) {
                k += 1
                console.log("증가증가증가",k);
            }
        });
        if (k>=FinaleData.selectable[i].count) {
            setClueindex(i);
            setSuspectList(
                suspectList.map(it =>
                  it.index == clueindex ? {...it, value: true} : it,
                ),
            );
        }
    }
    var m = 0;
    var n = 0;
    itemList.map((data)=>{
        if(FinaleData.cluelist.find(itd=>itd.index==data.index)) {
            m += 1
            console.log("노말엔딩 확인",m)
        }
        if(FinaleData.truecluelist.find(itd=>itd.index==data.index)) {
            n += 1
            console.log("진엔딩 확인",n)
        }
    })
    if (m>=FinaleData.endClueCount[0] && n>=FinaleData.endClueCount[1]) {
        setTrueEndCode(3)
        console.log("진엔딩 조건 충족");
    }
    else if (m>=FinaleData.endClueCount[0]) {
        setTrueEndCode(2)
        console.log("노말엔딩 조건 충족");
    }
    else {
        setTrueEndCode(1)
        console.log("배드엔딩 조건 충족");
    }
  }

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
      if (scripts[nameOrder+1].text == 'openSuspect') {
        console.log("open suspect 확인");
        setDialogState(false);
        setSuspectState(true);
      }
      if (scripts[nameOrder].name != 'end'){
        updateBacklog(nameOrder);
      }
    }
    if (scripts[nameOrder + 1].text == 'gotoMain') {
    //   chapterClear();
      Alert.alert(`Chapter ${props.route.params.order} CLEAR!`);
      navigation.navigate('ChapterPage', {name: props.route.params.episode});
    }
    if (scripts[nameOrder].getItem > 0) {
      console.log("아이템 획득해야함! 번호 : ",scripts[nameOrder].getItem);
    }
    if (scripts[nameOrder].moveIndex > 0) {
        // setNameOrder(scripts[nameOrder].moveIndex);
        // setImageOrder(scripts[nameOrder].moveIndex);
        goIndexDialog(scripts[nameOrder].moveIndex);
    }
    if (scripts[nameOrder].moveIndex == -1) {
        if (suspectList.find(sus=>sus.value==true)) {
            goIndexDialog(10)
        } else {
            goIndexDialog(100)
        }
    }
  };

  //챕터 완료하면서 아이템 저장, 메인화면으로 가기
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
        console.log("저장완료");
        navigation.navigate('ChapterPage', {name: props.route.params.episode});
      } else {
        console.log("저장실패!");
        setNameOrder(nameOrder - 1);
        setImageOrder(imageOrder - 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      chapterClear();
      // navigation.navigate('ChapterPage', {name: props.route.params.episode});
    }
  };

    // 백로그 업데이트
    const updateBacklog = (index) => {
        // console.log("업데이트로그",index,backlogList.find(i=>i==index));
        if (backlogList.find(idx=>idx==index)) {
            // console.log(backlogList.find(idx=>idx==index));
            return
        }
        else {
            setBacklogDialog(backlogDialog=>[...backlogDialog, {
            name: dialog[index].name,
            text: dialog[index].text,
            img: dialog[index].img,
            type: dialog[index].type
            }])
            setBacklogList(backlogList=>[...backlogList, index])
        }
    }

  //아이템 불러오기
  const getItemList = async() => {
    console.log("ID 값!",userID);
    try {
      const response = await axios.get('http://j7e102.p.ssafy.io:8080/users/items/'+userID);
      if (response.status == 200) {
        setItemList(response.data);
        console.log("가져온 아이템!",response.data);
      }
      else {
        console.log("에에엥");
      }
    } catch (error) {
      console.log(error);
    }
  }

  // dialog의 특정 인덱스로 보내기
  function goIndexDialog(index) {
    var iindex = scripts.findIndex(i => i.index == index);
    setNameOrder(iindex);
    setImageOrder(iindex);
    setDialogState(true);
    setDetectState(false);
  }
  const [dialog, setDialog] = useState(scripts);
  const [backlogDialog, setBacklogDialog] = useState([]);
  const [backlogList, setBacklogList] = useState([]);
  const epiImgBg = dataa.setting.chapterbg;

  useEffect(() => {
    getItemList();
    checkSelectable();
    setTimeout(() => {
      onFinish();
    }, 1000);
    console.log("nameorder",nameOrder);
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

        <FinaleModalSuspect 
            count={4}
            suspectcount={[1,2,3,4]}
            suspectImg={suspectImg}
            dialog={FinaleData.DialogIndex}
            goFunc={goIndexDialog}
            close={setSuspectState}
            visible={suspectState}
            suspectList={suspectList}
            trueendcode={trueendcode}
            trsus={FinaleData.truesuspect}
        />

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

export default FinalePage;
