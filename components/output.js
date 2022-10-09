/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {StyleSheet, View} from 'react-native';

 const Output = () => {
   return (
     <View style={styles.container}>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
    width: '100%',
    height: 670,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    transform: [{translateY: 40}]
   },
 });
 
 export default Output;