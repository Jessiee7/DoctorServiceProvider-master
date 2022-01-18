import React from 'react'
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native'
import { height, width } from '../assets/constants/ScreenDimensions'

const Search = ({ placeholder, source }) => {

    return (
        <View style={styles.mainContainer}>
            <TextInput style={styles.searchBar} placeholder={placeholder} placeholderTextColor= '#516094'/>
            <TouchableOpacity style={styles.searchButton}>
                <Image source={source} style={styles.image} />
            </TouchableOpacity>
        </View>
    )
}


export default Search

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        width: width / 1,
        // backgroundColor: 'yellow',
        justifyContent: 'space-evenly',
        margin: 10
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
    searchButton: {
        borderRadius: 99,
        backgroundColor: '#516094',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 24,
        height: 24
    }
}) 