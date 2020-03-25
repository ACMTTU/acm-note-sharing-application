import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import Discover from './Discover'
import Home from './Home'
import Profile from './Profile'

export default function Tabs(){

    const Tab = createBottomTabNavigator();

    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName='home'
                tabBarOptions={{
                    activeTintColor: 'white',
                    inactiveTintColor: 'gray',
                    activeBackgroundColor: '#00BDAA',
                    marginBotton: 20
                }}
            
            >
                <Tab.Screen
                    name='discover'
                    component={Discover}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome5 name={"search"} color={color} size={size} />
                        )
                    }}
                />
                <Tab.Screen
                    name='home'
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome5 name={"home"} color={color} size={size} />
                        )
                    }}
                />
                <Tab.Screen
                    name='profile'
                    component={Profile}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome5 name={"user"} color={color} size={size} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}