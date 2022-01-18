import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, Alert, Pressable, Modal } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Images } from '../assets/constants/Images'
import { height, width } from '../assets/constants/ScreenDimensions'
const SubTotalBlock = ({style ,colorTxt}) => {
    return (
        <View style={{ marginTop: '6%', padding: '3%', borderRadius: 10, borderWidth: 1, width: width / 1.1, height: height / 6, borderColor: '#B4B4B4', alignItems: 'center',backgroundColor:style }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginVertical: '1%' }}>
                    <Text style={{fontSize:18,color:colorTxt}}>{'Subtotal'}</Text>
                    <Text style={{fontSize:18,color:colorTxt}}>{'300'}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginVertical: '1%' }}>
                    <Text style={{fontSize:18,color:colorTxt}}>{'GST'}</Text>
                    <Text style={{fontSize:18,color:colorTxt}}>{'₹54'}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginVertical: '3%' }}>
                    <Text  style={{fontSize:19,color:colorTxt,fontWeight:'bold'}}>{'Total'}</Text>
                    <Text  style={{fontSize:19,color:colorTxt ,fontWeight:'bold'}}>{'₹354'}</Text>
                </View>
            </View>
    )
}
export default SubTotalBlock
const styles = StyleSheet.create({
    Text: {
        fontSize:18,
    
      
    },
})
