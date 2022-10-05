import React, {useState} from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import {Modal, StyleSheet, View, Text} from 'react-native';
import ModalInventoryButtonBack from '../button/back';
import ModalInventoryCard from '../card';

function ModalInventory(props) {
  console.log(props.items);
  const [selectedItem, setSelectedItem] = useState(0);
  const [displayName, setDisplayName] = useState('');
  const [displayText, setDisplayText] = useState('');

  function setIndex(index) {
    console.log(index, '값으로 실행되었음');
    var iindex = props.items.findIndex(i => i.index == index);
    console.log(
      iindex,
      '값이 입력되어',
      props.items[iindex].name,
      '이 이름이고',
      props.items[iindex].description,
      '이 내용임',
    );
    setDisplayName(props.items[iindex].name);
    setDisplayText(props.items[iindex].description);
  }

  return (
    props.visible && (
      <View style={styles.full}>
        <ImageBackground
          source={require('../../../../images/modal/inventorybg.png')}
          style={{width: '90%', height: '94%', marginLeft: '8%'}}>
          <ModalInventoryButtonBack setter={props.setter} />
          <View style={styles.view}>
            <View style={styles.left}>
              <View style={styles.buttontab}>
                <TouchableOpacity style={styles.tab}></TouchableOpacity>
              </View>
              <View style={styles.document}>
                <Text style={styles.name}>{displayName}</Text>
                <Text style={styles.description}>{displayText}</Text>
              </View>
            </View>
            <View style={styles.right}>
              <View style={styles.itembox}>
                <View style={styles.cssbox}>
                  {/* 테스트용 부분입니다. 이미지를 넣으면 아래부분은 제거할것 */}
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                  <View style={styles.grid} />
                </View>
                {props.items &&
                  props.items.map(I => (
                    <ModalInventoryCard
                      item={I}
                      itemImg={props.itemImg}
                      setItem={setIndex}
                    />
                  ))}
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  modal: {},
  full: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  view: {
    width: '90%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  left: {
    flex: 1,
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 1,
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  document: {
    marginTop: '10%',
    width: '70%',
    height: '65%',
    marginRight: '10%',
  },
  infotext: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'SimKyungha',
  },
  buttontab: {
    flexDirection: 'row',
    width: '80%',
  },
  tab: {
    marginHorizontal: 3,
  },
  itembox: {
    width: '90%',
    // height: "80%",
    aspectRatio: 1,
    // borderWidth: 3,
    // borderColor: 'red',
    flexDirection: 'row',
  },
  cssbox: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // borderWidth:1,
    // borderColor: "black",
    flexWrap: 'wrap',
  },
  grid: {
    width: '19%',
    height: '18%',
    // width: 20,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: 'black',
  },
  name: {
    fontSize: 20,
    fontFamily: 'AssetBold',
    color: 'white',
  },
  description: {
    fontSize: 16,
    fontFamily: 'ChosunKm',
    color: 'black',
  },
});

export default ModalInventory;
