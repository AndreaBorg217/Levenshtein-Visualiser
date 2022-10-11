/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {StyleSheet, View, Text} from 'react-native';

 const Cell = ({contents, bg, text}) => {
  console.log(contents, bg, text);
   return (
     <View style={[styles.container, {backgroundColor: bg}]}>
        <Text style={[styles.text, {color: text}]}>{contents}</Text>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
    container:{
      width: 45,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#000000'
    },
    text:{
      fontSize: 25
    }
 });
 
 export default Cell;