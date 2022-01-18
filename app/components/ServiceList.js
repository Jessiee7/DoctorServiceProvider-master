import React from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import { Images } from '../assets/constants/Images'
import { height, width } from '../assets/constants/ScreenDimensions'

const ServiceList = () => {

    const data = [
        {
            
            ref: 'Refrigrator',
            cooler: 'Cooler',
            ac: 'AC',
            switch: 'Switchboard'
        },
         {
            
            ref: 'Refrigrator',
            cooler: 'Cooler',
            ac: 'AC',
            switch: 'Switchboard'
        },
          {
            
            ref: 'Refrigrator',
            cooler: 'Cooler',
            ac: 'AC',
            switch: 'Switchboard'
        },
           {
            
            ref: 'Refrigrator',
            cooler: 'Cooler',
            ac: 'AC',
            switch: 'Switchboard'
        },
            {
            
            ref: 'Refrigrator',
            cooler: 'Cooler',
            ac: 'AC',
            switch: 'Switchboard'
        }
    ]

    const renderItem = (item) => {
        return (
            <View>
                <View style={{flexDirection: 'row', padding: 2}}>
                    <View style={styles.iconView}>
                        <Image source={Images.fridge} resizeMode='contain' />
                        <Text> {item.ref} </Text>
                    </View>
                    <View style={styles.iconView}>
                        <Image source={Images.fan} resizeMode='contain' />
                        <Text> {item.cooler} </Text>
                    </View>
                    <View style={styles.iconView}>
                        <Image source={Images.ac} resizeMode='contain'/>
                        <Text> {item.ac} </Text>
                    </View>
                    <View style={styles.iconView}>
                        <Image source={Images.switch} resizeMode='contain'/>
                        <Text> {item.switch} </Text>
                    </View>
                </View>    
            </View>
         )
     }
    return (
        <View>
            
            <Text> {'Service List'} </Text>
            <FlatList
                data={ data}
                renderItem={renderItem}
                style={{width: width/1.1, height: height/1.3}}
            />
        </View>
    )
}

export default ServiceList


const styles = StyleSheet.create({
    mainContainer: {
        
    },
    iconView: {
        width: width / 8,
        height: height / 12,
        borderRadius: 99,
        justifyContent: 'center',
        alignItems: 'center'
    }
})