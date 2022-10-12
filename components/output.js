/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, useEffect} from 'react';
 import {StyleSheet, View, Text, FlatList} from 'react-native';
 import {operations, createMatrix} from '../utilities/functions.js'
 import Row from './row.js'
 import Operation from './opCell.js'

 const Output = ({start, target}) => {
  const [matrix, setMatrix] = useState(createMatrix(start.toLowerCase(), target.toLowerCase()))
  const [operationsGrid, setOperations] = useState(operations(start.toLowerCase(), target.toLowerCase()))
  
   return (
     <View style={styles.container}>
      
      <Text style={styles.operation}>{start.concat('\t\t')} ⟹ {'\t\t'.concat(target)}</Text>

      <View style={styles.matrix}>
          <FlatList
            data={matrix}
            renderItem={({item}) => <Row array={item}/>}
            keyExtractor={(item, index) => index}
          />
      </View>

    
      
      <View style={styles.operationCont}>
        <View style={styles.headers}>

          <View style={styles.insert}>
            <Text style={styles.header}>Insertion</Text>
          </View>

          <View style={styles.delete}>
            <Text style={styles.header}>Deletion</Text>
          </View>

          <View style={styles.sub}>
            <Text style={styles.header}>Substitution</Text>
          </View>
        
        </View>
        <FlatList

          data={operationsGrid}
          renderItem={({item}) => <Operation letter={item.letter} bg={item.bg} width={340/(operationsGrid.length/2)}/>}
          keyExtractor={(item, index) => index}
          numColumns={operationsGrid.length/2}
        />
      </View>

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
   },
   matrix:{
    position: 'absolute',
    transform: [{translateY: -80}]
   },
   headers:{
    flexDirection: 'row',
   },
   insert:{
    width: 100,
    height: 60,
    backgroundColor: '#9CD2B4',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000000',
    borderWidth: 1,
   },
   delete:{
    width: 100,
    height: 60,
    backgroundColor: '#F47B74',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000000',
    borderWidth: 1,
   },
   sub: {
    width: 140,
    height: 60,
    backgroundColor: '#F4D785',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000000',
    borderWidth: 1,
   },
   header:{
    color: '#000000',
    fontSize: 18
   },
   operationCont:{
    position: 'absolute',
    transform: [{translateY: 220}]
   }
 });
 
 export default Output;