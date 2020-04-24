import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import Classroom from '../Classroom'

export default function Classrooms(props) {

    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Classroom
                style={styles.classroomStyle}
                courseName='100'
                title='Calculus 1'
                semester = 'Spring 2020'
                professor='John smith'
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 370,
        height: 110,
        justifyContent: 'center'
    },
    classroomStyle: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
    }
})