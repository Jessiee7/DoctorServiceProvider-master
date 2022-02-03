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
// import RNPickerSelect from 'react-native-picker-select';
import RNPickerSelect from 'react-native-picker-select'
const JobDetailStatus = ({ navigation }) => {
    const [open, setOpen] = useState('');

    const [modalVisible, setModalVisible] = useState(false);
    const [items, setItems] = useState([
        { label: 'complete', value: 'complete' },
        { label: 'pending', value: 'pending' }
    ]);


    return (

        <View style={styles.mainContainer}>

            <BackButton name={'Job Details'} navigation={navigation} />
            <HeaderUser navigation={navigation} />
            <ServiceBlock navigation={navigation} />
            <DateTime />
            <SubTotalBlock colorTxt={'#000000'} />

            <View style={{ height: '30%', width: '95%' }}>
                <Pressable onPress={() => {
                    setModalVisible(!modalVisible)

                }} style={{ alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: '#516094', width: width / 1.09, height: '18%', marginTop: '13%', }}>
                    <View style={{ width: '24%', backgroundColor: '#000', height: '10%', borderRadius: 10 }}></View>
                </Pressable>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}

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
                    <View style={{ width: '90%', height: height / 12, alignItems: 'center', marginTop: '20%' }}>
                        <View style={{}}>

                            <View style={{ marginRight: '30%', marginBottom: '10%', }}>
                                <Text style={styles.Txt}>{'Day Left :'}</Text>
                                <Text style={styles.Txt}>{'2 Days'}</Text>
                            </View>
                            <View style={{ marginRight: '30%', marginBottom: '10%', width: '104%' }}>

                                <Text style={styles.Txt}>{'Address :'}</Text>
                                <Text style={styles.Txt}>{'12 / 2, XYZ, Colony. Indore (M.P.)'}</Text>
                            </View>
                            <View style={{ marginRight: '30%', marginBottom: '15%' }}>

                                <Text style={styles.Txt}>{'Assignee Name'}</Text>
                                <Text style={styles.Txt}>{'XYZ'}</Text>
                            </View>
                        </View>
                        {/* <View style={{ width: '90%', height: height / 16, backgroundColor: '#fff', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: '6%', marginTop: '10%' }} > */}
                            {/* <Text style={{ color: '#516094', fontWeight: 'bold', fontSize: 18 }}>{'Change Status'} </Text> */}
                            {/* <View style={styles.pickerBlock}> */}
                    
                            <View style={styles.pickerBlock}>

                            <RNPickerSelect
                                placeholder={{
                                    label: 'Change Status',
                                    color: '#0B2B6D',
                            
                                }}
                                onValueChange={setOpen}

                                items={items}
                               // viewContainer={{ backgroundColor: 'white', height: '20%', borderColor: '#D7BE69' }}
                            />
                            {/* </View> */}
                            {/* <Image source={Images.downArrow} resizeMode='contain' style={{ width: 18, height: 18 }} /> */}
                        </View>
                        <Pressable style={{ height: '100%', width: '100%', marginLeft: '9%' }} onPress={() => navigation.navigate('CompleteJob')}>
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

export default JobDetailStatus

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
    Txt: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    pickerBlock: {
        width:'90%',
        justifyContent: 'center',
        backgroundColor: 'white',
        height:height/15,
        borderRadius: 10,
        // marginBottom:'1%',
        borderColor: '#516094',
        borderWidth: 1,
       // marginVertical:'1%'
    }
})