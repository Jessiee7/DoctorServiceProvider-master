import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image,Modal } from 'react-native'
import {width, height} from '../assets/constants/ScreenDimensions'
import { Images } from '../assets/constants/Images'

const CustomeButton = ({navigate, name, style, titleStyle,img}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
        <TouchableOpacity style={[styles.button, style]} onPress={() => {setModalVisible(true)}}>
           <Image
                    source={img}
                    style={{ width:'100%', height:'100%', marginVertical: '2%', }}
                    resizeMode='contain'
                />
        </TouchableOpacity>


<Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                // onRequestClose={() => {
                //     Alert.alert("Modal has been closed.");
                //     setModalVisible(!modalVisible);
                // }}
            >
                
                <View style={{ width:'80%', height: '60%',alignSelf:'center', backgroundColor: '#DEDEDE', marginTop: '50%',borderRadius:20, }}>
                    <Text style={{fontSize:25,marginTop:'15%',marginLeft:'8%',color:'#3B3939'}}>{'Feedback'}</Text>
                  <View style={{alignSelf:'center',width:'90%',height:'45%',backgroundColor:'#D1D8E2',borderRadius:11,marginTop:'2%'}}>
                    
                  <Image
                    source={Images.feedbackblock}
                    style={{ width:'95%', height:'35%' ,marginTop:'3%',alignSelf:'center'}}
                    resizeMode='contain'
                />
                
                  </View>
                  
                  <TouchableOpacity style={[styles.button,styles.leftbutton]}  onPress={()=>setModalVisible(false)}>
                 <Text style={[styles.buttonText]}> {'Reply'} </Text>
                  </TouchableOpacity>


                </View>
              
            </Modal>
            </>
        
    )
}

export default CustomeButton

const styles = StyleSheet.create({
  button: {
    width: width/4,
    height: height/20,
    borderRadius: 10,
    borderColor: '#516094',
    borderWidth: 1,
    backgroundColor: '#516094',
    justifyContent: 'center',
    alignItems: 'center'
},
    buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
}   ,
leftbutton:{
    marginLeft:'60%',
    marginTop:'20%'
} 
});