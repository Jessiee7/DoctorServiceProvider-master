import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native'
// import { Icon } from 'react-native-vector-icons/FontAwesome'
import { Images } from '../assets/constants/Images'
import { height, width } from '../assets/constants/ScreenDimensions'
import Header from '../components/Header'
import JobListComponent from '../components/JobListComponent'
import DropDownPicker from 'react-native-dropdown-picker';
import StatusBlock from '../components/StatusBlock'

const JobList = ({ navigation }) => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'within - 5Km', value: 'within - 5Km' },
    { label: 'within - 10Km', value: 'within - 10Km' }
  ]);

  return (

    // <ImageBackground source={Images.blueBackground} resizeMode="cover" style={styles.background}>
    <View style={{ backgroundColor: '#516094', paddingBottom: '9%' }}>
      <View style={{ width: width, height: height / 4.5, alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', marginLeft: '80%', marginTop: '1%' }}>
          <Image source={Images.newbell} resizeMode='contain' style={{ width: 22, height: 28, marginStart: 16, }} />
        </View>
        <Image
          source={Images.dashboard}
          style={{ width: 44, height: 44, marginVertical: '2%' }}
          resizeMode='contain'
        />
        <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: '1%' }}>{'JOB LIST'}</Text>
      </View>
         
      <View style={{ borderRadius: 30, width: width, height: height / 1.41, padding: '3%', backgroundColor: '#fff', alignItems: 'center' }}>
        {/* <View> */}
       
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#C3C3C3', marginHorizontal: '2%', marginVertical: '1%', marginBottom: '2%', alignSelf: 'flex-start' }}>{'October 2021'}</Text>
        <ScrollView  showsVerticalScrollIndicator={false} style={{height:'100%',width:'100%',}}>

        {/* <DropDownPicker
                      open={open}
                      value={value}
                      items={items}
                      setOpen={setOpen}
                      setValue={setValue}
                      setItems={setItems}
                      style={{width: width/3,backgroundColor:'#DEDEDE',height:height/21}}
                      disableBorderRadius={false}
                    />
              </View> */}
              <StatusBlock   nameLft={'Status'} nameRgt={'Working'} navigate ={navigation}/>
        <JobListComponent     navigate={() => navigation.navigate('JobDetails')} />
        <JobListComponent    navigate={() => navigation.navigate('JobDetails')} />
        <JobListComponent   navigate={() => navigation.navigate('JobDetails')} />

        </ScrollView>
      </View>
     
    </View>
    // </ImageBackground>
  )
}

export default JobList

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: height,
    width: width,
    borderBottomRightRadius: 60,
    backgroundColor: 'red',
    marginBottom: 69
  },
  background: {
    flex: 1,
    //   justifyContent: "center",
    alignItems: 'center',
  },
});
