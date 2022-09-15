import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';
import IngameBarLoading from '../../components/ingame/bar/loading';
import IngameTextTitle from '../../components/ingame/text/title';

function IngamePage(props) {
  console.log(props.route.params.name);
  const [isReady, setReady] = useState(false);
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
      style={{width: '100%', height: '100%'}}></ImageBackground>
  ) : (
    <ImageBackground
      source={{
        // uri: 'https://image.shutterstock.com/image-photo/flat-lay-composition-evidences-crime-600w-1859010208.jpg',
        uri: 'https://media.istockphoto.com/photos/yellow-police-line-do-not-cross-on-concrete-wall-background-with-copy-picture-id1366991815',
        cache: 'only-if-cached',
      }}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.loadingbox}>
        <IngameTextTitle name={props.route.params.name} />
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
});

export default IngamePage;
