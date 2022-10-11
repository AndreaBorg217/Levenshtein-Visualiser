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

 const Operation = ({letter, bg, width}) => {
   return (
     <View style={[styles.container, {backgroundColor: bg}, {width: width}]}>
        <Text style={styles.text}>{letter}</Text>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
    container:{
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#000000'
    },
    text:{
      fontSize: 25,
      color: '#000000',
    }
 });
 
 export default Operation;