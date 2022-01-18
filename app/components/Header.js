import React from 'react'
import { View, Text, Image } from 'react-native'
import { Images } from '../assets/constants/Images'
import { width } from '../assets/constants/ScreenDimensions'

const Header = () => {
    return (
        <View style={{flexDirection:'row', width: width, justifyContent: 'flex-end', paddingHorizontal: 26, marginTop: '7%'}}>
            {/* <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{'Welcome'}</Text> */}
            <View style={{flexDirection: 'row'}}>
                {/* <Image source={Images.wallet} resizeMode= 'contain' style={{width: 24, height: 18}} /> */}
                <Image source={Images.bell} resizeMode='contain' style={{ width: 22, height: 28, marginStart: 16,}}/>
            </View>
            
        </View>
    )
}

export default Header
