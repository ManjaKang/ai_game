import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

function ModalCharacter(props) {
  const imagePos1 = props.data[props.state].position[0];
  const imagePos2 = props.data[props.state].position[1];
  const imagePos3 = props.data[props.state].position[2];
  const imageUri1 = props.data[props.state].character[0];
  const imageUri2 = props.data[props.state].character[1];
  const imageUri3 = props.data[props.state].character[2];
  return (
    <View style={styles.view}>
      {imagePos1 == 1 ? (
        <Image source={imageUri1} style={styles.image1} />
      ) : imagePos1 == 2 ? (
        <Image source={imageUri1} style={styles.image2} />
      ) : (
        imagePos1 == 3 && <Image source={imageUri1} style={styles.image3} />
      )}
      {imagePos2 == 1 ? (
        <Image source={imageUri2} style={styles.image1} />
      ) : imagePos2 == 2 ? (
        <Image source={imageUri2} style={styles.image2} />
      ) : (
        imagePos2 == 3 && <Image source={imageUri2} style={styles.image3} />
      )}
      {imagePos3 == 1 ? (
        <Image source={imageUri3} style={styles.image1} />
      ) : imagePos3 == 2 ? (
        <Image source={imageUri3} style={styles.image2} />
      ) : (
        imagePos3 == 3 && <Image source={imageUri3} style={styles.image3} />
      )}
      {/* <Image source={imageUri1} style={`styles.image${imagePos1}`} />
    <Image source={imageUri2} style={`styles.image${imagePos2}`} />
    <Image source={imageUri3} style={`styles.image${imagePos3}`} /> */}
    </View>
  );

  // propsstate != '' ? (
  //   <Image source={imageUri} style={styles.image}></Image>
  // ) : null;
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    width: '50%',
    height: '100%',
    left: '2%',
    position: 'absolute',
  },
  image2: {
    width: '50%',
    height: '100%',
  },
  image3: {
    width: '50%',
    height: '100%',
    right: '2%',
    position: 'absolute',
  },
});
export default ModalCharacter;
