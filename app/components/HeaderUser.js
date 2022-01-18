import React from 'react'
import { View, Text } from 'react-native'

const HeaderUser = ({navigation}) => {
    return (
        <View>
                <Text style={{ color: '#000', fontSize: 30, fontWeight: 'bold' }}>{'User Name'}</Text>
                <Text style={{ color: '#000', fontSize: 22, fontWeight: 'bold' }}>{'9995555999'}</Text>
                <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', marginVertical: '1%' }}>{'12/2, XYZ Colony, Indore (M.P.)'}</Text>
                <Text style={{ color: '#1B4AE4', fontSize: 13, fontWeight: 'bold', marginVertical: '3%' }}>{'Electronics Service'}</Text>
            </View>
    )
}

export default HeaderUser
