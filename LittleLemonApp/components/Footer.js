import * as React from 'react'
import {StyleSheet, Text,View} from 'react-native'

export default function Footer() {
   return (

       <View style={footerStyles.container}>
        <Text style={footerStyles.text}>
            All rights reserved by Little Lemon, 2023
        </Text>
        </View>
   )
   
}

const footerStyles = StyleSheet.create ({
    container: {
        position: 'absolute',
        height:'3%', 
        left: 0, 
        right: 0, 
        backgroundColor: '#EE9972', 
        width:'100%', 
        bottom: '0%'
    },
    text: {
        //padding: 5, 
        fontSize:18, 
        color:'black', 
        textAlign: 'center', 
        fontWeight: '400',
        fontStyle: 'italic'
    }
})