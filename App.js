import { StatusBar } from 'expo-status-bar';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

let randomNumber = Math.floor(Math.random()*100)+1;
let trial = 0;

export default function App() {
  const [text, setText]  = useState('Guess a number between 1-100');
  const [guess, setGuess] = useState('');



  const checkNumber = () => {
    console.log(randomNumber);
    let guessInt = parseInt(guess);
    trial++;
    if (guessInt == randomNumber) {
      Alert.alert('You found the right number in '+trial+' trials');
      // restart game
      trial = 0;
      randomNumber = Math.floor(Math.random()*100)+1;
      setText('Guess a number between 1-100');
    } else if (guessInt < randomNumber){
      setText('Your guess '+guess+' is too low');
    } else{
      setText('Your guess '+guess+' is too high');
    }
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput
          keyboardType='number-pad'
          style={styles.textInput}
          onChangeText={guess => setGuess(guess)} value={guess}
      />
      <Button title='Guess!'
              onPress={checkNumber}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderColor: "#000",
    height: 44,
    marginTop: 11,
    marginBottom: 5,
    width: 66,
    borderWidth: 1,

  }
});
