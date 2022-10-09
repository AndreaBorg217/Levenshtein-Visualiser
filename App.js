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

 const App = () => {
 
   return (
     <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>Levenshtein Algorithm Visualiser</Text>
        </View>  
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#F2EBEC',
    alignItems: 'center',
    justifyContent: 'center',
   },
   header:{
    width: 400,
    height: 70,
    backgroundColor: '#134826',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{translateY: -330}]
   },
   name:{
    color: '#FFFFFF',
    fontSize: 24
   }
 });
 
 export default App;