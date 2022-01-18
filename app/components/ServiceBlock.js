import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, Alert, Pressable, Modal } from 'react-native'
import { Images } from '../assets/constants/Images'
import { height, width } from '../assets/constants/ScreenDimensions'
const ServiceBlock = ({navigation}) => {
    return (
        <View style={{ padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#B4B4B4', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width / 1.1 }}>
        <Pressable  style={{height:'40%',width:'8%',position :'absolute', right:'8%',top:'116%',}}>
        <Image source={Images.Arrowdropdown} style={{ width: '100%', height:'90%', borderRadius: 2, marginStart: '-1%' }} />
        </Pressable>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={Images.fridgepink} style={{ width: 36, height: 60, borderRadius: 2, marginStart: '-1%' }} />
                <Text style={{ fontSize: 14, color: '#000', marginStart: '5%' }}>{'Refrigerator Service'}</Text>
            </View>
            <Text style={{ color: '#000', fontSize: 24, fontWeight: 'bold', paddingEnd: '3%' }}>{'$300'}</Text>
        </View>
    )
}

export default ServiceBlock
