import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import axios from 'axios';
import {setId} from '../../redux/login';
import {useSelector, useDispatch} from 'react-redux';

const LoginPage = () => {
  const ID = useSelector(state => state.id.value);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [id, onChangeId] = React.useState(null);
  const [pw, onChangePw] = React.useState(null);
  const [validated, setValidated] = React.useState(false);

  // ID 형식 확인
  const validateId = id => {
    const regex = /^[a-z0-9]{4,20}$/;
    return regex.test(id);
  };

  // Password 형식 확인
  const validatePw = pw => {
    const regex = /^[A-Za-z0-9@$!%*#?&]{4,20}$/;
    return regex.test(pw);
  };

  // 공백 제거
  const removeWhitespace = text => {
    const regex = /\s/g;
    return text.replace(regex, '');
  };

  // Signin Component
  const _handleIdChange = id => {
    const changedId = removeWhitespace(id);
    onChangeId(changedId);
    setValidated(validateId(id) && validatePw(pw));
  };

  const _handlePwChange = pw => {
    const changedPw = removeWhitespace(pw);
    onChangePw(changedPw);
    setValidated(validateId(id) && validatePw(pw));
  };

  const axiosLogin = async () => {
    if (!validated) {
      Alert.alert('아이디나 비밀번호가 틀렸습니다!');
    } else {
      try {
        const response = await axios.post(
          'http://j7e102.p.ssafy.io:8080/users/login',
          {
            userId: id,
            password: pw,
          },
        );
        if (response.status === 200) {
          console.log(response.data.userId);
          if (
            response.data.userId == 'wrong userId' ||
            response.data.userId == 'wrong password'
          ) {
            Alert.alert('아이디나 비밀번호가 틀렸습니다!');
          } else {
            await AsyncStorage.setItem('userId', response.data.userId);
            dispatch(setId(response.data.userId));
            onChangeId('');
            onChangePw('');
            navigation.navigate('EpisodePage');
          }
        } else {
          Alert.alert('서버 오류!');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

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
            onChangeText={_handleIdChange}
            value={id}
            autoCapitalize={'none'}
            placeholder="아이디를 입력하세요."
          />
          <TextInput
            style={styles.input}
            onChangeText={_handlePwChange}
            value={pw}
            autoCapitalize={'none'}
            secureTextEntry={true}
            placeholder="비밀번호를 입력하세요."
          />
          <View style={styles.spaceEvenlyContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('SignUp')}>
              <ImageBackground
                source={require('../../images/modal/button.png')}
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                resizeMode="stretch">
                <Text style={styles.signuptext}>회원가입</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => axiosLogin()}>
              <ImageBackground
                source={require('../../images/modal/button.png')}
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                resizeMode="stretch">
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
    marginTop: '5%',
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
    borderColor: 'white',
    backgroundColor: 'white',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    height: '30%',
  },
  text: {
    fontFamily: 'HeirofLightRegular',
    fontSize: 40,
    color: 'white',
  },
  logintext: {
    fontFamily: 'HeirofLightRegular',
    fontSize: 19,
    color: 'white',
  },
  signuptext: {
    fontFamily: 'HeirofLightRegular',
    fontSize: 19,
    color: 'white',
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
