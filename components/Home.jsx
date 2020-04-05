import React from 'react'
import { View, Text } from 'react-native'
import {Icon} from 'react-native-elements' 

export default function Home(props) {

    return (
<View style={{flex:1,justifyContent:"center",backgroundColor:"#fff", alignItems:"stretch"}}>
    
    
    
    <View style={{flex:1,backgroundColor:"white",alignItems: 'flex-end',justifyContent: 'flex-end'}}>
        <Icon
            name ='plus'
            type ='simple-line-icon'
            color ='#00BDAA'
            reverse

            />
    </View>
</View>
    );

};