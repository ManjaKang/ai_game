import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const LoginPage = () => {
  const navigation = useNavigation();
  const [id, onChangeId] = React.useState(null);
  const [pw, onChangePw] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../images/start_page/background.jpg')}
        style={{height: '100%', width: '100%'}}>
        <View style={styles.logintextcontainer}>
          <Text style={styles.text}>로그인</Text>
        </View>
        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeId}
            value={id}
            placeholder="아이디를 입력하세요."
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePw}
            value={pw}
            placeholder="비밀번호를 입력하세요."
          />
          <View style={styles.spaceEvenlyContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('SignUp')}>
              <ImageBackground
                source={require('../../images/modal/button.png')}
                style={{height: '100%', width: '100%'}}>
                <Text style={styles.signuptext}>회원가입</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Main')}>
              <ImageBackground
                source={require('../../images/modal/button.png')}
                style={{height: '100%', width: '100%'}}>
                <Text style={styles.logintext}>로그인</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  logintextcontainer: {
    marginLeft: '42%',
    marginTop: '10%',
  },
  inputcontainer: {
    marginLeft: '15%',
    marginTop: '3%',
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    borderColor: 'white',
  },
  button: {
    width: '30%',
    height: '30%',
    marginTop: '3%',
  },
  text: {
    fontFamily: 'HeirofLightRegular',
    fontSize: 40,
  },
  logintext: {
    marginLeft: '20%',
    marginTop: '14%',
    fontFamily: 'HeirofLightRegular',
    fontSize: 19,
  },
  signuptext: {
    marginLeft: '15%',
    marginTop: '14%',
    fontFamily: 'HeirofLightRegular',
    fontSize: 19,
  },
  spaceEvenlyContainer: {
    marginTop: '3%',
    marginLeft: '12%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    height: '50%',
  },
});

export default LoginPage;
