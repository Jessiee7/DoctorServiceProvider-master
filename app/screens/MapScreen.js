import React, {useState} from 'react'
import { View, Text, StyleSheet ,ScrollView, Image, FlatList, TextInput} from 'react-native'
// import {  } from 'react-native-gesture-handler'
import { Images } from '../assets/constants/Images'
import { height, width } from '../assets/constants/ScreenDimensions'
import CustomeButton from '../components/CustomeButton'
import Header from '../components/Header'
import MapInput from '../components/MapInput'
import ProfileHeader from '../components/ProfileHeader'
import Search from '../components/Search'

const MapScreen = () => {
    const [horiZontalListData, setHoriZontalListData] = useState('')
    const [horizontalCardData, setHorizontalCardData] = useState({
        name: 'name',
        game: 'game'
    })
   
   
    return (
        <View style={styles.mainContianer}>
  
            <Header/>
            <ProfileHeader />
            <View style={{ backgroundColor: '#fff', width: width, height: '82%', borderRadius: 30 , alignItems: 'center'}}>
                <MapInput placeholder={'Address Title'} source={Images.locationblue} style={{height: height/17,width: width/1.1, marginTop: '8%'}} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#516094', marginVertical: 10, alignSelf: 'flex-start', marginStart: 20 }}> {'Choose Location'} </Text>
                <View style={{width: width/1.1, height: height/2, borderColor: '#516094', borderWidth: 1,borderRadius: 18 }}>

                </View>
                <CustomeButton name={'Save Address'} style={{width: width/1.1, marginTop: 20}}/>
            </View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    mainContianer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#516094',
        height: height,
        width: width
    },
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#516094',
        alignSelf: 'flex-start',
    },
    searchBar: {
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#516094',
        width: width / 1.3,
        height: height / 18,
        paddingStart: 10,
        fontSize: 14
    },
})
