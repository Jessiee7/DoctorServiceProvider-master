import React from 'react'
import { useState } from 'react'
import { View, Text, Image,Modal,Pressable,Alert } from 'react-native'
import { height, width } from '../assets/constants/ScreenDimensions'
import { Images } from '../assets/constants/Images'
import { Header } from 'react-native/Libraries/NewAppScreen'
import JobListComponent from '../components/JobListComponent'
import FeedbackBlock from '../components/FeedbackBlock'
const JobHistory = ({navigation}) => {

    return (
        <View style={{ height: '100%', width: '100%', backgroundColor: '#516094' }}>
            <View style={{ width: width, height: height / 4.5, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', marginLeft: '80%', marginTop: '1%' }}>
                    <Image source={Images.newbell} resizeMode='contain' style={{ width: 22, height: 28, marginStart: 16, }} />
                </View>

                <Image
                    source={Images.jobHistory}
                    style={{ width:'20%', height:'25%', marginVertical: '2%', }}
                    resizeMode='contain'
                />
                <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: '1%' }}>{'JOB HISTORY'}</Text>

            </View>
            <View style={{ borderRadius: 30, width: width, height: height / 1.41, padding: '3%', backgroundColor: '#fff', alignItems: 'center' }}>
                <FeedbackBlock navigation={navigation}/> 
                <JobListComponent />
                <JobListComponent />
{/* ----------------------------------------------------------------------------------------------------------- */}
                  

            {/* ------------------------------------------------------------------------ */}
            </View>
        </View>
    )
}

export default JobHistory
