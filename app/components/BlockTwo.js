import React from 'react'
import { View, Text,Image } from 'react-native'
import { Images } from '../assets/constants/Images'
import { height, width } from '../assets/constants/ScreenDimensions'

const BlockTwo = ({navigation,color,colorTxt,img,name}) => {
    return (
                        <View style={{ width: '100%', height: height / 16, backgroundColor: color, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: '6%', marginTop: '4%' }} >
                            <Text style={{ color: colorTxt, fontWeight: 'bold', fontSize: 18 }}>{name} </Text>
                            <Image source={img} resizeMode='contain' style={{ width: 18, height: 18 }} />
        </View>
    )
}

export default BlockTwo
