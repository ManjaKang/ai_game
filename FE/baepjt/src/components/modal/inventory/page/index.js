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
          style={{width: '100%', height: '100%'}}
          resizeMode="stretch">
          <ModalInventoryButtonBack setter={props.setter} />
          <View style={styles.view}>
            <View style={styles.left}>
              <View style={styles.leftview}>
                <View style={styles.document}>
                  <Text style={styles.name}>{displayName}</Text>
                  <Text style={styles.description}>{displayText}</Text>
                </View>
              </View>
            </View>
            <View style={styles.right}>
              <View style={styles.rightview}>
                <View style={styles.itembox}>
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
    marginTop: '10%',
    marginLeft: '9%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  leftview: {
    marginTop: '4%',
    marginLeft: '2%',
    width: '75%',
  },
  left: {
    flex: 1,
    height: '100%',
  },
  right: {
    flex: 1,
    height: '100%',
  },
  rightview: {
    width: '70%',
  },
  document: {
    marginTop: '7%',
    width: '100%',
    height: '65%',
    textAlign: 'center',
  },
  name: {
    fontSize: 20,
    fontFamily: 'AssetBold',
    color: 'black',
  },
  description: {
    marginTop: '1%',
    fontSize: 16,
    fontFamily: 'AssetBold',
    color: 'black',
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
    width: '100%',
    aspectRatio: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  cssbox: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    flexWrap: 'wrap',
  },
  grid: {
    width: '19%',
    height: '18%',
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default ModalInventory;
