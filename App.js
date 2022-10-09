/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {StyleSheet, View, Text, TextInput} from 'react-native';

 const App = () => {
 const [start, setStart] = useState('')
 const [target, setTarget] = useState('')

   return (
     <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.name}>Levenshtein Algorithm Visualiser</Text>
        </View>  

      <View style={styles.inputCont}>
        <TextInput
          style={styles.input}
          cursorColor={'#000000'}
          maxLength={7}
          placeholder={"Start string"}
          onChangeText={text => setStart(text)}
          autoCapitalize={false}
        />

        <View style={styles.arrow}>
          <View style={styles.body}/>
          <View style={styles.head}/>
        </View>

        <TextInput
          style={styles.input}
          cursorColor={'#000000'}
          maxLength={7}
          placeholder={"Target string"}
          onChangeText={text => setTarget(text)}
          autoCapitalize={false}
        />
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
    position: 'absolute',
    transform: [{translateY: -330}]
   },
   name:{
    color: '#FFFFFF',
    fontSize: 24
   },
   inputCont:{
    position: 'absolute',
    transform: [{translateY: -80}]
   },
   input:{
    width: 260,
    height: 60,
    borderWidth: 3,
    borderColor: '#134826',
    borderRadius: 10,
    margin: 15,
    padding: 15,
    fontSize: 20,
    },
    arrow:{
      alignItems: 'center',
      justifyContent: 'center',
    },
    body:{
      height: 50,
      width: 3,
      backgroundColor: '#134826',
    },
    head:{
      width: 0,
      height: 0,
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderLeftWidth: 10,
      borderRightWidth: 10,
      borderBottomWidth: 30,
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
      borderBottomColor: "#134826",
      transform: [{ rotate: "180deg" }],
      margin: -1
    }

 });
 
 export default App;