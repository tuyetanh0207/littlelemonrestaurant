import * as React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
export default function Header() {
  return (
    <View style={headerStyles.container}>
      <Text
        style={headerStyles.text}
        numberOfLines={3}>
        Welcome
        <Text style={headerStyles.boldText}> Little Lemon</Text>     {' '}
      </Text>
    </View>
  );
}


const headerStyles = StyleSheet.create({
  container: { 
    flex: 0.1, 
    backgroundColor: '#EE9972' ,
    width: '100%'
  },
  text: { 
    padding: 18, 
   // paddingHorizontal: '5%',
    fontSize: 26, 
    color: 'black' ,
    textAlign: 'center',
    
  },
  boldText: {
    fontWeight: 'bold' 
  }
})