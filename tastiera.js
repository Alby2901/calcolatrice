import React, {Component} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Tasto from './tasto';
import styles from './tastieracss';

/* 
Componente Tastiera della calcolatrice
*/

export default class Tastiera extends Component {
  render() {
  return (
    <View style={styles.tastiera}>
        <View style={styles.riga_tasti}>
            <Tasto caption = "AC"></Tasto>
            <Tasto caption = "&plusmn;"></Tasto>
            <Tasto caption = "%"></Tasto>
            <Tasto caption = "&divide;"></Tasto>
        </View>
        <View style={styles.riga_tasti}>
            <Tasto caption = "7"></Tasto>
            <Tasto caption = "8"></Tasto>
            <Tasto caption = "9"></Tasto>
            <Tasto caption = "&times;"></Tasto>
        </View>
        <View style={styles.riga_tasti}>
            <Tasto caption = "4"></Tasto>
            <Tasto caption = "5"></Tasto>
            <Tasto caption = "6"></Tasto>
            <Tasto caption = "&ndash;"></Tasto>
        </View>
        <View style={styles.riga_tasti}>
            <Tasto caption = "1"></Tasto>
            <Tasto caption = "2"></Tasto>
            <Tasto caption = "3"></Tasto>
            <Tasto caption = "+"></Tasto>
        </View>
        <View style={styles.riga_tasti}>
            <Tasto caption = "0"></Tasto>
            <Tasto caption = ","></Tasto>
            <Tasto caption = "="></Tasto>
        </View>
    </View>
  );
}}