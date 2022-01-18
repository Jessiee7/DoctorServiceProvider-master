import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Login from '../screens/Login';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import MapScreen from '../screens/MapScreen';



const Tab = createBottomTabNavigator();

const BottomTabBar = ({navigation}) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    // position: 'absolute',
                    elevation: 0,
                    backgroundColor: 'skyblue',
                    // borderRadius: 15,
                    height: 60,
                    borderTopRightRadius:-40
                }
            }}
        >
        <Tab.Screen name="Home" component={Home} options={{header: ()=> null}} />    
      <Tab.Screen name="Login" component={Login} options={{header: ()=> null}}/>
      <Tab.Screen name="MapScreen" component={MapScreen}  options={{header: ()=> null}}/>
    </Tab.Navigator>
    )
}

export default BottomTabBar
