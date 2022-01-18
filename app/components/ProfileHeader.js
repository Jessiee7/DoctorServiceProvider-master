import React from 'react'
import { View, Text, Image } from 'react-native'
import { Images } from '../assets/constants/Images'
import { height, width } from '../assets/constants/ScreenDimensions'

const ProfileHeader = () => {
    return (
              <View style={{flexDirection: 'row', width: width, height: height/8, alignItems: 'center', paddingHorizontal: 10,}}>
                    <View style={{ borderRadius: 99, width: 72, height: 72, margin: 6 }}>
                        <Image source={Images.profile} resizeMode= 'contain' style={{width: 70, height: 70}} />
                    </View>
                {/* <View style={{ width: width/1.3, height: 140}}> */}
                    <View style={{ width: width/1.5, height: 30, justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>{'Demo Name'}</Text>
                        <View style={{flexDirection: 'row', }}>
                            <Image source={Images.location} resizeMode= 'contain' style={{width: 12, height: 12}}/>
                            <Text style={{fontWeight: 'bold', fontSize: 10, marginStart: 2}}>{'12/2, XYZ Colony Indroe M.P.'}</Text>
                        </View> 
                    </View>
                    <Image source={Images.edit} style={{width: 20, height: 20, marginTop: 10, marginStart: 0, marginBottom:60}} />

                    {/* </View> */}
                
            </View>
    )
}

export default ProfileHeader
