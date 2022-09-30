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
import axios from 'axios';
import {setId} from '../../redux/login';
import {useSelector, useDispatch} from 'react-redux';

const SignUpPage = () => {
  const ID = useSelector(state => state.id.value);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [id, onChangeId] = React.useState(null);
  const [pw, onChangePw] = React.useState(null);
  const [pwCheck, onChangePwCheck] = React.useState(null);
  const [errorMessageId, setErrorMessageId] = React.useState('');
  const [errorMessagePw, setErrorMessagePw] = React.useState('');
  const [errorMessagePwCheck, setErrorMessagePwCheck] = React.useState('');

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
    setErrorMessageId(
      validateId(changedId)
        ? ''
        : '아이디는 소문자 또는 숫자를 4자 이상 20자 이하 입력하세요.',
    );
  };

  const _handlePwChange = pw => {
    const changedPw = removeWhitespace(pw);
    onChangePw(changedPw);
    setErrorMessagePw(
      validatePw(changedPw)
        ? ''
        : '비밀번호는 대소문자 또는 숫자 또는 특수문자를 4자 이상 20자 이하 입력하세요.',
    );
  };

  const _handlePwCheckChange = pwCheck => {
    const changedPwCheck = removeWhitespace(pwCheck);
    onChangePwCheck(changedPwCheck);
    setErrorMessagePwCheck(
      pw == pwCheck ? '' : '비밀번호가 일치하지 않습니다.',
    );
  };

  const axiosSignup = async () => {
    if (id == '' || pw == '' || pwCheck == '') {
      Alert.alert('빈칸을 채워주시길 바랍니다!');
    } else if (errorMessageId) {
      Alert.alert('아이디 형식을 확인해주시길 바랍니다!');
    } else if (errorMessagePw) {
      Alert.alert('비밀번호 형식을 확인해주시길 바랍니다!');
    } else if (pw != pwCheck) {
      Alert.alert('입력된 비밀번호가 다릅니다!');
    } else {
      try {
        const response = await axios.post(
          'http://j7e102.p.ssafy.io:8080/users/signup',
          {
            userId: id,
            password: pw,
          },
        );
        if (response.status === 200) {
          if (response.data.userId == '중복') {
            Alert.alert('이미 존재하는 아이디입니다!');
          } else if (response.data.userId == 'wrong userId') {
            Alert.alert('아이디 형식을 확인해주시길 바랍니다!');
          } else if (response.data.userId == 'wrong password') {
            Alert.alert('비밀번호 형식을 확인해주시길 바랍니다!');
          } else {
            // dispatch(setId(response.data.userId));
            navigation.navigate('Login');
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
        <View style={styles.signuptextcontainer}>
          <Text style={styles.text}>회원가입</Text>
        </View>
        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.input}
            onChangeText={_handleIdChange}
            value={id}
            autoCapitalize={'none'}
            placeholder="아이디를 입력하세요."
          />
          <View style={styles.errormessagecontainer}>
            <Text style={styles.errormessagetext}>{errorMessageId}</Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={_handlePwChange}
            value={pw}
            autoCapitalize={'none'}
            placeholder="비밀번호를 입력하세요."
          />
          <View style={styles.errormessagecontainer}>
            <Text style={styles.errormessagetext}>{errorMessagePw}</Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={_handlePwCheckChange}
            value={pwCheck}
            autoCapitalize={'none'}
            placeholder="비밀번호를 다시 입력하세요."
          />
          <View style={styles.errormessagecontainer}>
            <Text style={styles.errormessagetext}>{errorMessagePwCheck}</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={axiosSignup}>
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
    marginTop: '2%',
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    borderColor: 'white',
    backgroundColor: 'white',
  },
  errormessagecontainer: {
    marginLeft: '3%',
    marginTop: '0%',
    marginBottom: '1%',
  },
  errormessagetext: {
    fontFamily: 'HeirofLightRegular',
    fontSize: 12,
    color: 'white',
  },
  button: {
    marginLeft: '30%',
    width: '20%',
    height: '20%',
    marginTop: '0%',
  },
  text: {
    fontFamily: 'HeirofLightRegular',
    fontSize: 40,
    color: 'white',
  },
  signuptext: {
    marginLeft: '15%',
    marginTop: '14%',
    fontFamily: 'HeirofLightRegular',
    fontSize: 19,
    color: 'white',
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
