import React from 'react'
import { View, Text, StyleSheet, } from 'react-native'
import {Button } from 'react-native-elements'
import {Card} from 'react-native-elements'   
import Classroom from './Classroom'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { ScrollView, Dimensions } from 'react-native'


export default function Home(props) {

    const {height} = Dimensions.get('window');
    


   
    
    return (
        
         <ScrollView>
        
        
    <Classroom 
        style = {styles.classroomStyle}  
        courseName="100" 
        title="Math" 
        semester="Spring" 
        professor="John"  
    />  

     <Classroom 
        style = {styles.classroomStyle}  
        courseName="100" 
        title="Math" 
        semester="Spring" 
        professor="John"  
    />  
        <Classroom 
        style = {styles.classroomStyle}  
        courseName="100" 
        title="Math" 
        semester="Spring" 
        professor="John"  
    />  

    <Classroom 
        style = {styles.classroomStyle}  
        courseName="100" 
        title="Math" 
        semester="Spring" 
        professor="John"  
    />  
        <Classroom 
        style = {styles.classroomStyle}  
        courseName="100" 
        title="Math" 
        semester="Spring" 
        professor="John"  
    />  

    <Classroom 
        style = {styles.classroomStyle}  
        courseName="100" 
        title="Math" 
        semester="Spring" 
        professor="John"  
    />  
        <Classroom 
        style = {styles.classroomStyle}  
        courseName="100" 
        title="Math" 
        semester="Spring" 
        professor="John"  
    />  

    <Classroom 
        style = {styles.classroomStyle}  
        courseName="100" 
        title="Math" 
        semester="Spring" 
        professor="John"  
    />   
    
        <Button
            style ={styles.ButtonStyle} 
            type = "clear" 
            icon={<Icon
                name="plus"
                size={60}
                color="#00BDAA"
                />
                }
            onClick={() => {}}    
        />
                
 </ScrollView>   

    );

};
const styles = StyleSheet.create({
    ButtonStyle: {
        justifyContent: "flex-end",
        alignItems: "flex-end", 
        paddingRight: 25,
        paddingBottom: 20,

    },
    classroomStyle: {
        flex: 1,        
        alignItems: "center",
        justifyContent: "center",

    },
  
  
  });
