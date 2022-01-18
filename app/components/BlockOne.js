import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { height, width } from '../assets/constants/ScreenDimensions'

const BlockOne = ({color ,colorTxt,name,navigation,margin,bottom,navigate}) => {
    return (
        <Pressable onPress={navigate}>
        <View style={{ width: '100%', height: height / 16, backgroundColor: color, borderRadius: 10, marginTop: '4%',marginBottom:bottom, justifyContent: 'center', alignItems: 'center' , marginTop: margin }} >
            <Text style={{ color: colorTxt, fontWeight: 'bold', fontSize: 18 }}>{name} </Text>
        </View>
        </Pressable>
    )
}

export default BlockOne
