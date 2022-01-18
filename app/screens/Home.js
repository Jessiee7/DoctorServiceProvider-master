import React, {useState} from 'react'
import { View, Text, StyleSheet ,ScrollView, Image, FlatList} from 'react-native'
// import {  } from 'react-native-gesture-handler'
import { Images } from '../assets/constants/Images'
import { height, width } from '../assets/constants/ScreenDimensions'
import Header from '../components/Header'
import ProfileHeader from '../components/ProfileHeader'
import Search from '../components/Search'

const Home = () => {
    const [horiZontalListData, setHoriZontalListData] = useState('')
    const [horizontalCardData, setHorizontalCardData] = useState({
        name: 'name',
        game: 'game'
    })
    let listItemView = (item) => {
                  return (
                    <View
                      key={item.ID}
                      style={{ backgroundColor: '#000', padding: 20 }}>
                      <Text>ID: {item.ID}</Text>
                      <Text>Name: {item.Name}</Text>
                      <Text>Designation: {item.Designation}</Text>
                      <Text>Email: {item.Email}</Text>
                       <Text>Password: {item.Password}</Text>
                    </View>
                  );
                };

    const listView = _ => {
        return (
            <View style={{ borderRadius: 20, borderColor: '#000', borderWidth: 10}}>
                <Text> {item.name} </Text>
            </View>
            )
        }
    return (
        <View style={styles.mainContianer}>
  
            <Header/>
            <ProfileHeader />
            <View style={{ backgroundColor: '#fff', width: width, height: '82%', borderRadius: 30 }}>
                <FlatList
                    data={horizontalCardData}
                    style={{width: width, height: height/5, backgroundColor:'skyblue'}}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => listView(item)}
                />
                <Search placeholder={'Search'} source={Images.search} />
            </View>
        </View>
    )
}

export default Home

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
})
