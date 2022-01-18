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
const CompleteJob = ({navigation}) => {
 const source= require('../assets/Images/ArrowWhite.png')
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={styles.mainContainer} >
    
                 <BackButton name= {'Complete Job'} navigation ={navigation}/>
                  <HeaderUser navigation={navigation}/> 
                   <ServiceBlock navigation={navigation}/>
                      <AddtionalCharges />   
                
                    <DateTime navigation={navigation}/>
                    <SubTotalBlock style={'#7798DA'}colorTxt={'#FFF'} />
                    <BlockTwo name={'Payment By Cash'} img = {source} color={'#516094'} colorTxt={'#FFF'} />
                    <BlockTwo  name={'Assignee Name'} img = {source} color={'#516094'} colorTxt={'#FFF'} />
                    <BlockOne navigate={()=>navigation.navigate('JobHistory')}  bottom ={'10%'} margin={'4%'} navigation={navigation} name={'Finish'} color={'#516094'} colorTxt={'#FFF'}/>
                    
                    
        </View>
      </ScrollView>
    )}

export default CompleteJob
const styles = StyleSheet.create({
    mainContainer: {
         width: '100%',
         height: '100%',
        padding: '5%',
        marginBottom:"10%"
        
      
    },
})