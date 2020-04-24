import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Card } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Classroom(props) {

    return (
        <View>
            <TouchableOpacity onPress={() => console.log(1)} >
                <Card containerStyle={styles.container}>
                    <Text style={{
                        fontSize: 30
                    }}>{props.title}</Text>
                    <Text>{props.courseName} - {props.professor}</Text>
                    <Text
                        style={{
                            fontSize: 10
                        }}
                    >{props.semester}</Text>
                </Card>
            </TouchableOpacity>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        width: 370,
        height: 110,
        justifyContent: 'center'
    },
})