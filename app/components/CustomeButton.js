import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {width, height} from '../assets/constants/ScreenDimensions'

const CustomeButton = ({navigate, name, style, titleStyle,stars}) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress = {navigate}>
            <Text style={[styles.buttonText, titleStyle]}> {name} </Text>
        </TouchableOpacity>
    )
}

export default CustomeButton

const styles = StyleSheet.create({
  button: {
    width: width/1.2,
    height: height/15,
    borderRadius: 10,
    borderColor: '#516094',
    borderWidth: 1,
    backgroundColor: '#516094',
    justifyContent: 'center',
    alignItems: 'center'
},
    buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
}    
});