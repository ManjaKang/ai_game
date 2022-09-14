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
import MainButtonAccount from '../../components/main/button/account';
import EpisodePage from '../../components/episode/page';
const MainPage = () => {
  const [shouldShow, setShouldShow] = useState(true);
  const showtohidden = shouldShow => {
    setShouldShow(shouldShow);
  };

  return (
    <SafeAreaView>
      <ImageBackground
        source={{
          // uri: 'https://image.shutterstock.com/image-photo/flat-lay-composition-evidences-crime-600w-1859010208.jpg',
          uri: 'https://ak.picdn.net/shutterstock/videos/1069224121/thumb/5.jpg?ip=x480',
          cache: 'only-if-cached',
        }}
        style={{width: '100%', height: '100%'}}>
        <View>
          <View style={styles.setbox}>
            <MainButtonOption />
            <MainButtonAccount />
          </View>
          {shouldShow ? (
            <View style={styles.viewcontainer}>
              <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                <MainTextTitle />
              </Text>
              <View style={styles.fixbutton}>
                <MainButtonNew
                  shouldShow={shouldShow}
                  showtohidden={showtohidden}
                />
                <MainButtonLoad />
              </View>
            </View>
          ) : (
            <View style={styles.viewcontainer}>
              <EpisodePage shouldShow={shouldShow} setShow={setShouldShow} />
            </View>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewcontainer: {
    marginTop: '10%',
  },
  setbox: {
    top: 10,
    left: 10,
    position: 'absolute',
    flexDirection: 'row',
  },
  fixbutton: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default MainPage;
