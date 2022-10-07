import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

function ModalInventoryCard(props) {
  console.log('itemnum:', props);
  const click = () => {
    props.setItem(props.item.index);
    console.log(props.item.index, '로 실행');
  };
  return (
    <TouchableOpacity style={styles.button} onPress={() => click()}>
      <Image
        style={styles.img}
        source={props.itemImg[props.item.index]}></Image>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '18%',
    aspectRatio: 1,
    borderColor: 'white',
    borderWidth: 1,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});

export default ModalInventoryCard;
