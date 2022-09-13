import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Button,
} from 'react-native';
import MainTextTitle from '../../components/main/text/title';
import MainButtonNew from '../../components/main/button/new/index.js';
import MainButtonLoad from '../../components/main/button/load';
import MainButtonOption from '../../components/main/button/option';
import EpisodePage from '../../components/episode/page';
const MainPage = () => {
  const [shouldShow, setShouldShow] = useState(true);
  const showtohidden = shouldShow => {
    setShouldShow(shouldShow);
    console.log(shouldShow, 'parent에서print');
  };

  return (
    <SafeAreaView>
      <View>
        <MainButtonOption />
        {shouldShow ? (
          <View>
            <Text>
              <MainTextTitle />
            </Text>
            <MainButtonNew
              shouldShow={shouldShow}
              showtohidden={showtohidden}
            />
            <MainButtonLoad />
          </View>
        ) : (
          <View>
            <EpisodePage />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
{
  /* <ImageBackground
      source={{
        // uri: 'https://image.shutterstock.com/image-photo/flat-lay-composition-evidences-crime-600w-1859010208.jpg',
        uri: 'https://media.istockphoto.com/photos/yellow-police-line-do-not-cross-on-concrete-wall-background-with-copy-picture-id1366991815',
        cache: 'only-if-cached',
      }}
      style={{width: '100%', height: '100%'}}> */
}

{
  /* </ImageBackground> */
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
export default MainPage;
