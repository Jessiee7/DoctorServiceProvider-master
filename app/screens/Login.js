import React from 'react'
import { Image, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { height, width } from '../assets/constants/ScreenDimensions';
import CustomeButton from '../components/CustomeButton';
import JobList from './JobList';
const background = require('../assets/Images/background.png');
const operator = require('../assets/Images/hotline.png')
const google = require('../assets/Images/google.png');
const facebook = require('../assets/Images/facebook.png');

const Login = ({navigation}) => {
  return (
     
        <View style={styles.mainContainer}>

        <ImageBackground source={background} resizeMode="cover" style={styles.background}>
            <Image source={ operator}  style={styles.image} />
                <View style={{ width: width/1.2, height: 4, backgroundColor: '#516094' , marginBottom: '4%'}}></View>
                  <View style={{width: width/1.5, height: 4, backgroundColor: '#516094', marginBottom: '20%'}}></View>
                <CustomeButton navigate={ ()=> navigation.navigate('JobList') } name='LOG IN'/>
                <Text style={styles.text}> {'or'} </Text>
                <View style={{flexDirection: 'row'}}>
                    <Image source={google}  style={styles.google}  />
                    <Image source={facebook}  style={styles.facebook} />
                </View>
      </ImageBackground>
        </View>
    
    );
}

export default Login

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    marginTop: '9%',
    marginBottom: '7%',
  },
  background: {
    flex: 1,
    //   justifyContent: "center",
    alignItems: 'center',
  },
  image: {
    marginTop: '18%',
    marginBottom: '26%',
    width: width / 1.25,
    height: '30%',
  },
  google: {
    marginHorizontal: '4%',

  },
  facebook: {
    marginHorizontal: '4%',
   
  },
});



