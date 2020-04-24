import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Classrooms from './profile_screens/Classrooms';
import Notes from './profile_screens/Notes'

const Tab = createMaterialTopTabNavigator()

export default function Profile(props) {

    return (
            <Tab.Navigator>
                <Tab.Screen name="Notes" component={Notes} />
                <Tab.Screen name="Classrooms" component={Classrooms} />
            </Tab.Navigator>
    );

};


