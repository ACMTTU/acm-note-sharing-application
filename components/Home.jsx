import React from 'react'
import { View, Text } from 'react-native'

export default function Home(props) {

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text>This is the Home screen</Text>
        </View>
    );

};