import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, Alert, Pressable, Modal } from 'react-native'
import { Images } from '../assets/constants/Images'
import { height, width } from '../assets/constants/ScreenDimensions'
const DateTime = ({navigation}) => {
    return (
        <View>
             <View style={{ flexDirection: 'row', marginTop: '4%', justifyContent: 'space-between', paddingHorizontal: 0, width: width / 1.1 }} >
                <View style={{ flexDirection: 'row', padding: 6, borderRadius: 10, borderWidth: 1, width: width / 2.3, height: height / 13, borderColor: '#B4B4B4', alignItems: 'center' }}>
                    <Image source={Images.calender} style={{ width: 32, height: 32, marginStart: '1%' }} />
                    <View style={{ marginStart: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#A5A5A5' }}>{'Date'}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>{'5 Nov 2021'}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', padding: 6, borderRadius: 10, borderWidth: 1, width: width / 2.3, height: height / 13, borderColor: '#B4B4B4', alignItems: 'center' }}>
                    <Image source={Images.time} style={{ width: 32, height: 32, marginStart: '1%' }} />
                    <View style={{ marginStart: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#A5A5A5' }}>{'Time'}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>{'5:00 pm'}</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: '6%', flexDirection: 'row', padding: 6, borderRadius: 10, borderWidth: 1, width: width / 1.1, height: height / 14, borderColor: '#B4B4B4', alignItems: 'center' }}>
                <Image source={Images.locationblue} style={{ width: 20, height: 20, marginStart: '1%' }} resizeMode='contain' />
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', marginStart: '1%' }}>{'12/2, XYZ Colony, Indore (M.P.) '}</Text>
            </View>
        </View>
    )
}

export default DateTime
