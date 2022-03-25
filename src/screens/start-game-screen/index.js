import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from "../../components/header"
import Input from "../../components/input";
import { styles } from "./styles";
import { colors } from "../../constants/theme";


 const StartGameScreen = () => {

  const [inputValue, setInputValue] = useState('');

   const handleOnChange = (text) => {
      setInputValue(text.replace(/[^0-9]/g, ''));
   };

   const handleOnClear = () => {
     setInputValue('');
   }

   return (
     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header title='Guess Number'/>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Start Game</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Choose number</Text>
            <Input 
                blurOnSubmit
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='number-pad'
                placeholder='Ej: 11' 
                placeholderTextColor={colors.placeholderColor}
                maxLength={2}
                handleOnChange={(value) => handleOnChange(value)}
                returnKeyType='done'
                // value={inputValue}
              />
          </View>
          <View style={styles.buttonsContainer}>
            <Button title="Clear" onPress={() => handleOnClear()} color='#5252BC'/>
            <Button title="Confirm" onPress={() => null} color='#5252BC'/>
          </View>
        </View>
      </View>
     </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;