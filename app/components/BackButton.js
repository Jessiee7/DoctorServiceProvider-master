import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, Pressable,  } from 'react-native'
import { height, width } from '../assets/constants/ScreenDimensions'
import { Images } from '../assets/constants/Images'


const BackButton = ({navigation ,name}) => {
    return (
       
       <View style={{ flexDirection: 'row', alignItems: 'center', width: width, justifyContent: 'space-between', marginBottom: '8%', marginTop: '3%' }}>
               
               <Pressable onPress={()=> navigation.goBack()}>
                <Image source={Images.back} style={{ width: 45, height: 45, alignSelf: 'flex-start' }} resizeMode='contain' />
                </Pressable>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#0B2B6D', paddingEnd: '38%' }}>{name}</Text>
            </View>
     
    )
}

export default BackButton
