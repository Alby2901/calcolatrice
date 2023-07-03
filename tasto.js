import React, {Component} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Processore from './processore';
import styles from './tastocss';

/* 
Componente Tasto della tastiera
*/

export default class Tasto extends Component {

  contiene(carattere,stringa){
    return (carattere.indexOf(stringa) > -1);
  }

  renderZero(){
    // Tasto zero
    return (
      <View>
        <TouchableOpacity style={[styles.tasto, styles.dimensioni_zero, styles.numero]}
          onPress={() => Processore.tastopremuto(this.props.caption)}>
          <Text style={styles.testo}>{this.props.caption}</Text>
        </TouchableOpacity>
      </View>
    );     
  }

  renderNumero(){
    // Tasto numerico (escluso 0)
    return (
      <View>
        <TouchableOpacity style={[styles.tasto, styles.dimensioni, styles.numero]}
          onPress={() => Processore.tastopremuto(this.props.caption)}>
          <Text style={styles.testo}>{this.props.caption}</Text>
        </TouchableOpacity>
      </View>
    );     
  }

  renderFunzione(){
    // Tasto funzione
    return (
      <View>
        <TouchableOpacity style={[styles.tasto, styles.dimensioni, styles.funzione]}
          onPress={() => Processore.tastopremuto(this.props.caption)}>
          <Text style={styles.testo}>{this.props.caption}</Text>
        </TouchableOpacity>
      </View>
    );     
  }

  renderFunzioneb(){
    // Tasto funzione
    return (
      <View>
        <TouchableOpacity style={[styles.tasto, styles.dimensioni, styles.funzioneb]}
          onPress={() => Processore.tastopremuto(this.props.caption)}>
          <Text style={styles.testo}>{this.props.caption}</Text>
        </TouchableOpacity>
      </View>
    );     
  }

  render() {
  
  // carico il tasto "0"
  if (this.contiene("0",this.props.caption)) {
      return this.renderZero()
  } 
  // carico i tast1 numerici (escluso 0)
  else if (this.contiene("123456789,",this.props.caption)) {
      return this.renderNumero()
  } 
  // carico i tasti funzione ( + - * /)
  else if (this.contiene("+÷×–=",this.props.caption)) {
      return this.renderFunzione()
  }
  // carico i tasti funzioneb ( AC +- %)
  else if (this.contiene("AC%±",this.props.caption)) {
    return this.renderFunzioneb()
  } 
}
}