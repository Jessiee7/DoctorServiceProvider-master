import React from 'react'
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { height, width } from '../assets/constants/ScreenDimensions'


const OtpBox = () => {
    return (
   
        <TextInput style={styles.inputText}>
            
            </TextInput>
          
    )
}

export default OtpBox

const styles = StyleSheet.create({
    inputText: {
        width: width / 6,
        height: height / 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        marginHorizontal: '2%',
        fontSize: 30
    }
})