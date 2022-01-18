import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, Alert, Pressable, Modal } from 'react-native'
import BackButton from '../components/BackButton'
import HeaderUser from '../components/HeaderUser'
import ServiceBlock from '../components/ServiceBlock'
import DateTime from '../components/DateTime'
import { Images } from '../assets/constants/Images'
import { height, width } from '../assets/constants/ScreenDimensions'
import SubTotalBlock from '../components/SubTotalBlock'
import { ScrollView } from 'react-native-gesture-handler'
import AddtionalCharges from '../components/AddtionalCharges'
import BlockTwo from '../components/BlockTwo'
import BlockOne from '../components/BlockOne'
const FinishJob = ({navigation}) => {
 const source= require('../assets/Images/ArrowWhite.png')
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={styles.mainContainer} >
    
                 <BackButton name= {'Finish Job'} navigation ={navigation}/>
                  <HeaderUser navigation={navigation}/> 
                   <ServiceBlock navigation={navigation}/>
                      <AddtionalCharges />   
                
                    <DateTime navigation={navigation}/>
                    <SubTotalBlock style={'#7798DA'}colorTxt={'#FFF'} />
                    <BlockOne bottom={'3%'} margin={'2%'}  name={'Payment By Cash'} color={'#516094'} colorTxt={'#FFF'}/>
                    <BlockOne bottom={'3%'} margin={'2%'}  name={'Finish'} color={'#516094'} colorTxt={'#FFF'}/>
                    <BlockOne bottom={'3%'} margin={'2%'} name={'Assigne Name'} color={'#516094'} colorTxt={'#FFF'}/>
                    
                    
        </View>
      </ScrollView>
    )}

export default FinishJob
const styles = StyleSheet.create({
    mainContainer: {
         width: '100%',
         height: '100%',
        padding: '5%',
        marginBottom:"10%"
        
      
    },
})