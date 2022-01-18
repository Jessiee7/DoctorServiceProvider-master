import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import {width, height} from '../assets/constants/ScreenDimensions';


const rectangle = require('../assets/Images/rectangle.png');
const ImageHeader = () => {
    return (
         <ImageBackground style={{ width: width, height: height/3, marginBottom: '30%', borderBottomLeftRadius: 40, borderBottomRightRadius: 40, justifyContent: 'center', alignItems: 'center'}} source={rectangle} resizeMode='stretch'  >
                    <Image source={require('../assets/Images/bar.png')} style={{ marginVertical: '2%', width: width / 1.2 }} resizeMode='stretch' />
                    <Image source={require('../assets/Images/bar.png')} style={ {marginVertical: '2%', width: width/1.2} } resizeMode='stretch' />  
                     <Image source={ require('../assets/Images/bar.png')} style={ {marginVertical: '2%', width: width/1.6} } />
                </ImageBackground>
    )
}

export default ImageHeader
