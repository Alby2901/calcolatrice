import {StyleSheet} from 'react-native';


/* CSS dei tasti */

export default StyleSheet.create({
    testo: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 40,
        color: '#cfcfcf',
    },
    dimensioni: {
        height: 75,
        width: 75,
    },
    dimensioni_zero: {
        height: 75,
        width: 150+1+1,
    },

    tasto: {
        borderStyle: 'solid',
        borderWidth: 2,
        bordercolor: 'black',
        borderRadius: 2,
        margin: 1,
    },
    // Colori di sfondo dei pulsanti 
    numero: {backgroundColor: '#656565'},
    funzione: {backgroundColor: '#F2A23F'},
    funzioneb: {backgroundColor: '#464646'},
})