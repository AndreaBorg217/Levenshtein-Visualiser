/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {View, StyleSheet, FlatList} from 'react-native';
 import Cell from './cell.js'

 const Row = ({array}) => {
   return (
    <View style={styles.row}>
     <FlatList
        data={array}
        renderItem={({item}) => <Cell contents={item.contents} bg={item.bg} text={item.text}/>}
        keyExtractor={(item, index) => index}
        numColumns={array.length}
      />
    </View>
   );
 };
 
 const styles = StyleSheet.create({
  flex: 1
 });
 
 export default Row;