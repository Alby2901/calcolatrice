import {Alert} from 'react-native'
import { Contiene } from './funzioni';

// Calsse del motore di calcolo

class processore {

    isNumeric(n) {
        // se il cast di float di n non restituisce "Not a Number" ed è un numero finito,
        // allora è numerico
        return  !isNaN(parseFloat(n)) && isFinite;
    }

    tastopremuto(tasto) {
        // è stato premuto un tasto
        // Alert.alert('Tasto premuto: ' + tasto);
        
        if (this.isNumeric(tasto)) {
            // tasti numerici
            if (global.sovrascrivi == 1) {
                // passo dall'azzeramento ad un valore
                
                global.miodisplay = 0;
                global.sovrascrivi = 0;
                global.miodisplay = tasto;
                
            } else {
                // prosego digitazione
                global.miodisplay = parseFloat(global.miodisplay+tasto).toString();
            }
            
        }

        if (tasto == 'AC') {
            // tasto di cancellazione del display e ripetizione del calcolo
            global.miodisplay = "0";
            global.accumulatore = 0;
            global.sovrascrivi = 1;
        }

        // tasto virgola decimale
        // => se premuto e non c'è già una virgola cambia la virgola in punto
        // e accoda
        if (tasto == ',' && Contiene(global.miodisplay,".")==-1) {
            global.miodisplay += ".";
        }

        // Verifico presenza operatori (aritmetici)
        if (Contiene("+÷×–=±", tasto) > -1) {
            // Alert.alert("Tasto operazione")
            
            // Converto le operazioni nei caratteri standard aritmetici
            if (tasto == "+") {tasto ="+"}
            if (tasto == "–") {tasto ="-"}
            if (tasto == "×") {tasto ="*"}
            if (tasto == "÷") {tasto ="/"}

            if (tasto == "±") {
                global.miodisplay=(parseFloat(global.miodisplay)*-1).toString()      
            }

            //Operatore aritmetico
            if (global.accumulatore!= 0) {
                global.accumulatore=global.accumulatore+parseFloat(global.miodisplay).toString();
            } else {
                global.accumulatore=parseFloat(global.miodisplay).toString();
            }

            // Calcolo quanto presente nell'accumulatore per mezzo di eval
            try {
                global.accumulatore = parseFloat(eval(global.accumulatore).toFixed(5)).toString();
                global.miodisplay=global.accumulatore;
            } catch (error) {}


            // Accodo l'operatore aritmetico all'accumulatore
            if(!(Contiene("=±",tasto) > -1)) {global.accumulatore += tasto};
            // global.accumulatore += tasto;
            global.sovrascrivi = 1;


        }

    }




}

const Processore = new processore();
export default Processore