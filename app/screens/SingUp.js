import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { height, width } from '../assets/constants/ScreenDimensions';
import CustomeButton from '../components/CustomeButton';
import CustomeInputText from '../components/CustomeInputText';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Images} from '../assets/constants/Images'



const SingUp = ({navigation}) => {
    return (
        <KeyboardAwareScrollView style={{width: width, height: height}}>
        <View style={styles.mainContainer}>
            <ImageBackground style={styles.imageBackground} source={Images.blueBackground} resizeMode='cover' >
                <View style={{marginTop: '10%', alignItems: 'center'}}>
                    <Text style={{ fontSize: 48, color: '#fff', fontFamily: 'Sarala-Bold', fontWeight: 'bold' }}>{'Sign Up'}</Text>
                    <Text style={{fontSize: 12, color: '#fff', fontWeight: 'bold'}}>{ 'Create a New Account' }</Text>
                </View>
                <View style={{justifyContent: 'center',alignItems: 'center',borderRadius: 99, width: 124, height: 124, backgroundColor: '#fff', marginTop: '20%', borderColor: '#ACBDF7', borderWidth: 3, marginBottom: '10%'}}>
                      
                            <Image source={Images.camera} style={{ width: 40, height: 40 }} resizeMode='contain' />
                        
                </View>
               
                <CustomeInputText placeholder='Your Name' source={Images.people} style={{ marginVertical: '2%' }} />
                <CustomeInputText placeholder= 'E-Mail ID' source={Images.mail}  style={{marginVertical: '2%'}} />
                <CustomeInputText placeholder= 'Password' source={Images.eye}  style={{marginVertical: '2%'}} />
                <CustomeInputText placeholder= 'Referral Code' source={Images.circle}  style={{marginVertical: '2%'}} />
                <View style={{width: '99%', height: '20%', backgroundColor: '#fff', alignItems: 'center', marginTop: '12%', paddingTop: '10%', borderTopLeftRadius: 24, borderTopRightRadius: 24}}>
                    <CustomeButton name='SIGN UP' navigate={ ()=> navigation.navigate('EditNamePass')} />
                </View>
              

            </ImageBackground>

            </View>
            </KeyboardAwareScrollView>
    )
}

export default SingUp

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: width,
        height: height
    },
    imageBackground: {
        flex: 1,
        alignItems: 'center'
    }
})