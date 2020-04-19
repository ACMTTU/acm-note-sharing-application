import React, {useState} from 'react'
import { View, Text } from 'react-native'
import {SearchBar} from 'react-native-elements'
export default function Discover(props){
   
    const [text, setText] = useState('') 

    return ( 
        <View>
             <SearchBar
                style= {{
                    top: 0,
                    flex: 1,
                    justifyContent: 'center',
                }}
                placeholder = "Search Notes Here..."
                onChangeText={(e) => {setText(e)}}
                value={text}
                />
            <Text
            style = {{
                flex: 1,
                backgroundColor: "#fff",
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >This is Jack editing and testing </Text>
        </View>
    );
};
