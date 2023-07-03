import React, {Component} from 'react'
import { StyleSheet, Text, View} from 'react-native';
import { Contiene } from './funzioni';

/* 
Componente Tastiera della calcolatrice
*/

export default class Logger extends Component {
  
    componentDidMount() {
        // creo un timer per il refresh automatico del componente

        this.interval = setInterval( ()=> this.setState({}),100);
    }

    componentWillUnmount() {
        clearInterval (this.interval)
    }
  
    render() {
        return (
            <View>
                <Text >Miodislay = {global.miodisplay}</Text>
                <Text >Accumulatore = {global.accumulatore}</Text>
                <Text >Sovrascivi = {global.sovrascrivi}</Text>
                <Text >Contiene = {Contiene(global.miodisplay,".")}</Text>
            </View>
        );
}}