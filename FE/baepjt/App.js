/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {Node} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import StartPage from './src/pages/start/index';
import LoginPage from './src/pages/login';
import SignUpPage from './src/pages/signup';
import MainPage from './src/pages/main';
import EpisodePage from './src/pages/episode';
import ChapterPage from './src/pages/chapter';
import IngamePage from './src/pages/ingame';
import CameraPage from './src/pages/camera';
import FinalePage from './src/pages/finale';
import SoundPlayer from 'react-native-sound-player';

// import MainButtonNew from './android/app/src/test/index.js';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  try {
    SoundPlayer.playSoundFile('main','mp3');
  } catch (e) {
      console.log(`cannot play the sound file`, e)
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar animated hidden />
        {/* <SafeAreaView style={backgroundStyle}> */}
        {/* <MainPage /> */}
        <Stack.Navigator>
          <Stack.Screen
            name="Start"
            component={StartPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Main"
            component={MainPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EpisodePage"
            component={EpisodePage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ChapterPage"
            component={ChapterPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="IngamePage"
            component={IngamePage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FinalePage"
            component={FinalePage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CameraPage"
            component={CameraPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView> */}
        {/* </SafeAreaView> */}
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
