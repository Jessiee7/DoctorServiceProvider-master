import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, KeyboardAvoidingView} from 'react-native'
import { height, width } from '../assets/constants/ScreenDimensions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CustomeButton from '../components/CustomeButton';
import {Header} from '@react-navigation/stack'

//Screen Import
import CustomeInputText from '../components/CustomeInputText'
import ImageHeader from '../components/ImageHeader';

const background = require('../assets/Images/background.png');

const SignIn = ({navigation}) => {
  return (
    <KeyboardAwareScrollView style={{ width: width, height: height }} >
      
        <View style={styles.mainContainer}>
            <ImageBackground source={background} resizeMode="cover" style={styles.background}>
               <ImageHeader/>
        <CustomeInputText
          placeholder={'Your Name'}
          source={require('../assets/Images/people.png')}
          style={{marginVertical: '3%'}}
        />
        <CustomeInputText
          placeholder={'Password'}
            source={require('../assets/Images/eyeoff.png')}
             style={{marginVertical: '3%'}}
        />
        {/* <View style={{alignItems: 'flex-end', marginBottom: '5%', width: width/1.2}}>
          <Text onPress={()=> navigation.navigate('ForgotPassword')} style={{color: '#516094', fontWeight: 'bold', fontSize: 12, alignSelf: 'flex-end', borderBottomColor: '#516094',borderBottomWidth: 1,}}>{'Forgot Password ?'} </Text>
        </View> */}
                <CustomeButton name="SIGN IN" navigate={ ()=> navigation.navigate('JobList') } style={{marginTop: '3%' }} />
            {/* <Text style={{ color: '#494949', fontWeight: 'bold', fontSize: 14, borderBottomColor: '#516094', marginTop: '11%',textDecorationLine: 'underline' }}>{'Create a New Account ?'} </Text>
            <Text onPress={()=> navigation.navigate('SignUp')} style={{color: '#516094', fontWeight: 'bold', fontSize: 14,borderBottomColor: '#516094',borderBottomWidth: 1, marginVertical: '2%'}}>{'Sign Up'} </Text> */}
     </ImageBackground>
      </View>
    </KeyboardAwareScrollView>
    );
}

export default SignIn

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: height,
    width: width,
    borderBottomRightRadius: 60,
    backgroundColor: 'red',
    marginBottom: 69
  },
  background: {
    flex: 1,
    //   justifyContent: "center",
    alignItems: 'center',
  },
});