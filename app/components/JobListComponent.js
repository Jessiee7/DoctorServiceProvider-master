import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
// import { cubic } from 'react-native/Libraries/Animated/Easing'
import CustomeButton from './CustomeButton'
import { width, height } from '../assets/constants/ScreenDimensions'

const JobListComponent = ({navigate,stars ,nameLft}) => {

   

    return (
        <TouchableOpacity onPress={navigate} style={{width: width/1.1,height: height/5, borderRadius: 20, borderColor: '#B4B4B4', borderWidth: 1, padding: 20, backgroundColor: '#fff', margin: '1%', justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.textBlack}>{'User Name'}</Text>
                <Text style={{color:'#B4B4B4', fontSize: 10}}>{'03 hrs ago'}</Text>
            </View>
            <Text style={styles.textBlack}>{'99999 99999'}</Text>
            <Text style={styles.textGray}>{'12/2, XYZ Colony, Indore (M.P.)'}</Text>
            <View style={{flexDirection: 'row', width: width/1.1 , marginTop: '5%'}}>
                <CustomeButton  name={'Cancel'} style={{ backgroundColor: '#ECF0F3', width: width / 3.5, height: height / 20, borderWidth: 0 }} titleStyle={{ color: '#000' }} />
                <CustomeButton name={'Accept'} style={{ width: width / 3.5, height: height / 20 , marginStart: 90}} />

            </View>
        </TouchableOpacity>
    )
}

export default JobListComponent

const styles = StyleSheet.create({
    textBlack: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    textGray: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#B4B4B4'
    }
})
