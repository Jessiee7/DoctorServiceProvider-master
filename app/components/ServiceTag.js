import React from 'react'
import { View, Text, Image } from 'react-native'
import { Icon } from 'react-native-vector-icons/icon'

const ServiceTag = () => {
    return (
        <View style={{flexDirection: 'row'}}>
            <View>
                <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                        {'Service Classic'}
                    </Text>
                    <Image/>
                </View>
                <View>
                    <Text style={{fontSize: 10, fontWeight: 'bold', color: '#A6A6A6'}}> {'1 Time Good Service'}</Text>
                </View>
            </View>
            <View>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}> {'$350'} </Text>
                <Text style={{fontSize: 10, fontWeight: 'bold', color: '#A6A6A6'}}> {'onwards'} </Text>
            </View>
        </View>
    )
}

export default ServiceTag
