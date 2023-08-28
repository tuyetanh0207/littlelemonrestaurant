
import React from "react";
import { Text, View, ScrollView } from "react-native";
import { StyleSheet } from 'react-native';
export default function WelcomeScreen() {
 
    return (
      
        <ScrollView style={welcomeStyles.container}>
            <Text style={welcomeStyles.headerText}>
                        Welcome to Little Lemon
            </Text>
                
            <Text style={welcomeStyles.text}>
                Little Lemon is a charming neighborhood
                 bistro that serves simple food and classic cocktails in
                  a lively but casual environment. We would
                   love to hear more about your experience with us!
            </Text>
            
        
        </ScrollView>
    
      
    )
}

const welcomeStyles= StyleSheet.create ({
    container: {
        flex: 1,    
        backgroundColor: 'black'
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center'
    },
    text: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center'
    }
})