import React from "react";
import {
  Text,
  View
} from 'react-native';
import Header from "../../components/header"
import { styles } from "./styles";


 const StartGameScreen = () => {
   return (
     <View style={styles.container}>
       <Header title='Guess Number'/>
       <Text>STAR GAME SCREEN </Text>
     </View>
  );
};

export default StartGameScreen;