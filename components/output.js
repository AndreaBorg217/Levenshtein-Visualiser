/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, useEffect} from 'react';
 import {StyleSheet, View, Text} from 'react-native';
 import {operations, createMatrix} from '../utilities/functions.js'

 const Output = ({start, target}) => {
  const [matrix, setMatrix] = useState()
  const [operationsGrid, setOperations] = useState()
  
  useEffect(() => {
    setMatrix(createMatrix(start, target))
    setOperations(operations(start, target))
  }, [start, target])
  
   return (
     <View style={styles.container}>
      <Text style={styles.operation}>{start.concat('\t\t')} ⟹ {'\t\t'.concat(target)}</Text>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
    width: '100%',
    height: 670,
    backgroundColor: '#F2EBEC',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    transform: [{translateY: 40}]
   },
   operation:{
    fontSize: 30,
    color: '#000000',
    position: 'absolute',
    transform: [{translateY: -300}]
   }
 });
 
 export default Output;