import React, { useState } from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, Alert, Pressable, Modal } from 'react-native'
import { Icon } from 'react-native-vector-icons/icon'
import { Images } from '../assets/constants/Images'
import { height, width } from '../assets/constants/ScreenDimensions'
import BackButton from '../components/BackButton'
import DateTime from '../components/DateTime'
import HeaderUser from '../components/HeaderUser'
import ServiceBlock from '../components/ServiceBlock'
import SubTotalBlock from '../components/SubTotalBlock'

const JobDetails = ({navigation}) => {
  
    const [modalVisible, setModalVisible] = useState(false);
  


    return (

        //  <ImageBackground source={Images.blueBackground} resizeMode="cover" style={styles.background}>
        //     <Text></Text>
        // </ImageBackground>
        <View style={styles.mainContainer}>
           
                 <BackButton name={'Job Details'} navigation ={navigation}/>
                  <HeaderUser navigation={navigation}/> 
                   <ServiceBlock navigation={navigation}/>
                    <DateTime/>
                      <SubTotalBlock colorTxt={'#000000'}/>
                    
            <View style={{height:'30%',width:'95%'}}>
            <Pressable onPress={() => {setModalVisible(!modalVisible)
                                
                               } }   style={{ alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: '#516094', width: width / 1.09, height: '14%', marginTop: '13%', }}>
                <View style={{ width: '24%', backgroundColor: '#000', height: '10%', borderRadius: 10 }}></View>
            </Pressable>
            </View> 
           
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                // onRequestClose={() => {
                //     Alert.alert("Modal has been closed.");
                //     setModalVisible(!modalVisible);
                // }}
            >
                
                <View style={{ width: width, height: height / 1.3, backgroundColor: '#516094', marginTop: '50%', borderTopRightRadius: 20, borderTopLeftRadius: 20, alignItems: 'center' }}>

                    <Pressable
                        onPress={() => setModalVisible(!modalVisible)}
                        style={{ alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: '#516094', width: width / 1.1, height: '5%' }}>
                        <View style={{ width: '24%', backgroundColor: '#000', height: '16%', borderRadius: 10 }}></View>
                    </Pressable>
                    {/* <View style={{backgroundColor: 'blue', width: width/1.3}}>
                    <Pressable
                    style={{width: 100, height: 40, backgroundColor: 'red'}}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={{color: 'blace', fontWeight: 'bold', fontSize: 16}}>Hide Modal</Text>
                    </Pressable>
                </View> */}
                    <View style={{ width: '90%', height: height / 12, alignItems: 'center', marginTop: '30%' }}>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: '10%' }} >
                            <Image source={Images.address} style={{ width: 55, height: 55 }} resizeMode='contain' />
                            <Image source={Images.call} style={{ width: 55, height: 55 }} resizeMode='contain' />
                        </View>
                        <View style={{ width: '90%', height: height / 16, backgroundColor: '#fff', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: '6%', marginTop: '10%' }} >
                            <Text style={{ color: '#516094', fontWeight: 'bold', fontSize: 18 }}>{'Assignee'} </Text>
                            <Image source={Images.downArrow} resizeMode='contain' style={{ width: 18, height: 18 }} />
                        </View>
                        <Pressable style={{height:'100%',width:'100%',marginLeft:'9%'}} onPress={()=>navigation.navigate('CompleteJob')}>
                        <View style={{ width: '90%', height: height / 16, backgroundColor: '#fff', borderRadius: 10, marginTop: '4%', justifyContent: 'center', alignItems: 'center' }} >
                            <Text style={{ color: '#516094', fontWeight: 'bold', fontSize: 18 }}>{'Done'} </Text>
                        </View>
                        </Pressable>
                    </View>

                </View>
              
            </Modal>
            
        </View>
    )
}

export default JobDetails

const styles = StyleSheet.create({
    mainContainer: {
        width: width,
        height: height,
        padding: '5%',
       

    },
    background: {
        flex: 1,
        alignItems: 'center',
    },
})