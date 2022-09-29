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
  Alert,
} from 'react-native';

const SignUpPage = () => {
  const navigation = useNavigation();
  const [id, onChangeId] = React.useState(null);
  const [pw, onChangePw] = React.useState(null);
  const [pwCheck, onChangePwCheck] = React.useState(null);
  const onClick = () => {
    Alert.alert('가입하신 아이디로 로그인해주세요');
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../images/start_page/background.jpg')}
        style={{height: '100%', width: '100%'}}>
        <View style={styles.signuptextcontainer}>
          <Text style={styles.text}>회원가입</Text>
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
          <TextInput
            style={styles.input}
            onChangeText={onChangePwCheck}
            value={pwCheck}
            placeholder="비밀번호를 다시 입력하세요."
          />

          <TouchableOpacity style={styles.button} onPress={onClick}>
            <ImageBackground
              source={require('../../images/modal/button.png')}
              style={{height: '100%', width: '100%'}}>
              <Text style={styles.signuptext}>회원가입</Text>
            </ImageBackground>
          </TouchableOpacity>
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
  signuptextcontainer: {
    marginLeft: '38%',
    marginTop: '7%',
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
    marginLeft: '30%',
    width: '20%',
    height: '20%',
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
    marginTop: '2%',
    marginLeft: '12%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    height: '50%',
  },
});

export default SignUpPage;
