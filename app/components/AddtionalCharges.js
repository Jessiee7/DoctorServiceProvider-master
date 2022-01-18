import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Images } from '../assets/constants/Images'
const AddtionalCharges = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.HeadingView}>
                <Text style={styles.HeadingText}>{'Additional Charge'}</Text>
                <Image source={Images.Add} style={styles.HeadingImg} resizeMode='contain' />
            </View>
            <View style={styles.buttonView}>
                <View style={styles.buttonView1}>
                    <Text style={styles.buttonText}>Switch Button</Text>
                    <Image source={Images.Vector} style={styles.buttonView1Img} resizeMode='contain' />

                </View>
                <View style={styles.buttonView2}>
                    <Text style={styles.buttonText}>₹50</Text>
                    <Image source={Images.Vector} style={styles.buttonView2Img} resizeMode='contain' />
                </View>
            </View>
            <View style={styles.buttonView}>
                <View style={styles.buttonView1}>
                    <Text style={styles.buttonText}>Switch Button</Text>
                    <Image source={Images.Vector} style={styles.buttonView1Img} resizeMode='contain' />

                </View>
                <View style={styles.buttonView2}>
                    <Text style={styles.buttonText}>₹50</Text>
                    <Image source={Images.Vector} style={styles.buttonView2Img} resizeMode='contain' />
                </View>
            </View>
            <View>

            </View>
            <Image source={Images.AddMore} style={styles.AddMoreImg} resizeMode='contain' />

        </View>

    )
}

export default AddtionalCharges
const styles = StyleSheet.create({
    mainContainer: {
        height: '17%',
        width: '100%',
        marginTop: '3%',
    },
    HeadingView: {
        flexDirection: 'row',
        padding: '2%'
    },
    HeadingText: {
        fontSize: 20,
        color: '#000'
    },
    HeadingImg: {
        width: "15%",
        height: '100%'
    },
    buttonView: {
        height: '25%',
        width: '100%',
        flexDirection: 'row'
    },
    buttonView1: {
        padding: '2%',
        borderWidth: 1,
        borderColor: '#B4B4B4',
        height: '95%',
        width: '75%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        color: '#000'
    },
    buttonView2: {
        padding: '2%',
        borderWidth: 1,
        borderColor: '#B4B4B4'
        , height: '95%',
        width: '25%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonView1Img: {
        width: "10%",
        height: '65%'
    },
    buttonView2Img: {
        width: "20%",
        height: '80%'
    },
    AddMoreImg: {
        width: "8%",
        height: '19%',
        alignSelf:'center',
       
    }
})
