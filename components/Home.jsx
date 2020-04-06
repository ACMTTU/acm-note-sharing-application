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
            style = {styles.customBtnBG}
            icon={<Icon
                name="plus"
                size={45}
                color="#00BDAA"
                backgroundColor="white"
                />
            }    
        />
                
        
    </View>
    );

};
const styles = StyleSheet.create({
    container: {
      flex: 1,
          justifyContent: "center",
      alignItems: "center"
    },
  
    /* Here, style the text of your button */
      customBtnText: {
          fontSize: 40,
          fontWeight: '400',
          color: "#fff",
      },
  
    /* Here, style the background of your button */
      customBtnBG: {
      paddingHorizontal: 5,
      paddingVertical: 5,
      borderRadius: 5,
      }
  });
