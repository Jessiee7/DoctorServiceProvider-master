import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity , Image} from 'react-native'
import { width, height } from '../assets/constants/ScreenDimensions';
import Icon from 'react-native-vector-icons/FontAwesome';


const MapInput = ({ placeholder, source , style}) => {
    
    return (
      <TouchableOpacity style={[styles.inputText, style]}>
            <Image source={source} style={ {width: 18, height: 18} } resizeMode='contain' />
            <TextInput placeholderTextColor="#D2D2D2" placeholder={placeholder} style={styles.placeholder} />
      </TouchableOpacity>
    );
}

export default MapInput

const styles = StyleSheet.create({
  inputText: {
    width: width / 1.2,
    height: height / 15,
    borderRadius: 10,
    borderColor: '#516094',
    borderWidth: 1,
    paddingStart: 10,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingEnd: 14,
    // marginVertical: '2.5%',
    backgroundColor: '#fff'
    
    },
placeholder: {
    fontWeight: 'bold',
    fontFamily: 'Sarala-Regular',
    width: width/1.4,
  fontSize: 14,
  // backgroundColor: 'red',
  height: height / 14,
  color: '#000'
    }
});