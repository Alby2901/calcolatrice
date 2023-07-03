import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tastiera from './tastiera';
import Display from './display';
import Logger from './log';

export default function App() {

  // definisco le variabili globali
  global.miodisplay = "0";   // memoria display
  global.accumulatore = ""; // memoria di calcolo
  global.sovrascrivi = 1; // sovrascive il display

  return (
    <View style={styles.app}>
      <View style={styles.calcolatrice}>
        <Display caption= '0'></Display>
        <Tastiera></Tastiera>
        <StatusBar style="auto" />
      </View>
      <View style={styles.logger}>
        <Logger></Logger>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calcolatrice: {
    alignSelf: 'center',
    top: 100,
    borderRadius: 10,
    backgroundColor: '#515151',
    overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.4,
      shadowRadius: 7.5,
      elevation: 12,
  },
  app: {
    flex: 1,
    // flexDirection: 'vertical',
    backgroundColor: 'red',
  },

  logger: {
    marginTop: 120,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    backgroundColor: 'yellow',
  }

});
