import React from "react";
import {
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import Header from "../../components/header"
import { styles } from "./styles";


 const StartGameScreen = () => {
   return (
     <View style={styles.container}>
       <Header title='Guess Number'/>
       <View style={styles.card}>
         <Text style={styles.cardTitle}>Start Game</Text>
         <View style={styles.inputContainer}>
           <Text style={styles.label}>Choose number</Text>
           <TextInput 
           style={styles.input}
            placeholder='11'
            placeholderTextColor='#5252BC'
            maxLength={2}
          />
         </View>
         <View style={styles.buttonsContainer}>
           <Button title="Clear" onPress={() => null} color='#5252BC'/>
           <Button title="Confirm" onPress={() => null} color='#5252BC'/>
         </View>
       </View>
     </View>
  );
};

export default StartGameScreen;