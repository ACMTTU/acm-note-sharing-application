import React from 'react'
import { View, Text, StyleSheet, } from 'react-native'
import {Button } from 'react-native-elements'
import {Card} from 'react-native-elements'   
import Classroom from './Classroom'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { ScrollView, Dimensions } from 'react-native'


export default function Home(props) {

    
    


   
    
    return (
        <View>

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
                

                            
    </ScrollView>   
    <Button
        style ={styles.ButtonStyle} 
        type = "clear" 
        icon={<Icon
            name="plus"
            size={65}
            color="#00BDAA"
            />
            }
        onPress={() => {}}    
    />
        </View> 

    );

};
const styles = StyleSheet.create({
    ButtonStyle: {

        position: "absolute",
        bottom: 10,
        right: 20

       

        
        








    },
    classroomStyle: {     
        position: "relative",   
        alignItems: "center",
        justifyContent: "center",


    },
  
  
  });
