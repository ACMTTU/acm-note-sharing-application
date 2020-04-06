import React from 'react'
import { View, Text, StyleSheet, } from 'react-native'
import {Button } from 'react-native-elements'
/* import {Icon} from 'react-native-elements'  */
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default function Home(props) {

    return (
    <View style={styles.container}>
        <Button
            type = "clear" 
            icon={<Icon
                name="plus"
                size={60}
                color="#00BDAA"
                />
            }    
        />
                
        
    </View>
    );

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
  
  
  });
