import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
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

function IngamePage(props) {
  console.log("props data", props)
  console.log("important",props.route.params.name);
  const [isReady, setReady] = useState(false);
  const [toolState,setToolState] = useState(false);
  const [optionState,setOptionState] = useState(false);
  const [dialogState,setDialogState] = useState(true);
  const [titleState,setTitleState] = useState(false);
  const [backlogState,setBacklogState] = useState(false);
  const [inventoryState,setInventoryState] = useState(false);
  const items = ["1","2"]
  const dialog = [
    {
      name:"name1",
      text:"text1",
      type:0,
      img:0,
      face:0,
    },
    {
      name:"name2",
      text:"text2",
      type:1,
      img:1,
      face:0,
    },
    {
      name:"name3",
      text:"text3",
      type:2,
      img:2,
      face:0,
    },
    {
      name:"name3",
      text:"text3",
      type:2,
      img:2,
      face:0,
    },
    {
      name:"name3",
      text:"text3",
      type:2,
      img:2,
      face:0,
    },
    {
      name:"name6",
      text:"text6",
      type:2,
      img:2,
      face:0,
    },
    {
      name:"name7",
      text:"text7",
      type:2,
      img:2,
      face:0,
    },
    {
      name:"name8",
      text:"text8",
      type:2,
      img:2,
      face:0,
    },
    {
      name:"name3",
      text:"text3",
      type:2,
      img:2,
      face:0,
    },
    {
      name:"name10",
      text:"text10",
      type:2,
      img:2,
      face:0,
    },
  ]

  const onFinish = () => setReady(true);

  useEffect(() => {
    setTimeout(() => {
      onFinish();
    }, 5000);
  });

  return isReady ? (
    <ImageBackground
      source={{
        // uri: 'https://image.shutterstock.com/image-photo/flat-lay-composition-evidences-crime-600w-1859010208.jpg',
        uri: 'https://media.istockphoto.com/photos/yellow-police-line-do-not-cross-on-concrete-wall-background-with-copy-picture-id1366991815',
        cache: 'only-if-cached',
      }}
      style={{width: '100%', height: '100%'}}>
        <View style={styles.leftbox}>
          <IngameButtonOption setstate={setOptionState}/>
        </View>
        <ModalOption visible={optionState} hideModalContentWhileAnimating={true} setter={setOptionState}/>
        <ModalDialog visible={dialogState} hideModalContentWhileAnimating={true} setter={setDialogState}/>
        <View style={styles.toolbox}>
          <IngameButtonToolbar state={toolState} setstate={setToolState}/>
          <ModalTool state={toolState} titlestate={setTitleState} backlogstate={setBacklogState}/>
        </View>
        <ModalBacklog visible={backlogState} hideModalContentWhileAnimating={true} setter={setBacklogState} data={dialog}/>
        <ModalInventory visible={inventoryState} hideModalContentWhileAnimating={true} setter={setInventoryState} items={items}/>
        <ModalGotomain visible={titleState} hideModalContentWhileAnimating={true} setter={setTitleState}/>
      </ImageBackground>
  ) : (
    <ImageBackground
      source={{
        // uri: 'https://image.shutterstock.com/image-photo/flat-lay-composition-evidences-crime-600w-1859010208.jpg',
        uri: 'https://media.istockphoto.com/photos/yellow-police-line-do-not-cross-on-concrete-wall-background-with-copy-picture-id1366991815',
        cache: 'only-if-cached',
      }}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.loadingbox}>
        <IngameTextTitle name={props.route.params.name} episode={props.route.params.episode}/>
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
    height: "10%",
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    top: 0,
    left: 0,
  },
  toolbox: {
    position: "absolute",
    width: "100%",
    height: "100%",
    // alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
});

export default IngamePage;
