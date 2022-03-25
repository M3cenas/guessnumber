import React from "react";
import {TextInput} from "react-native";
import { styles } from "./styles";

const Input = ({handleOnChange, style, ...props}) => {
  return (
    <TextInput {...props} 
      style={[ style, styles.input ]} 
      onChangeText={(text) => handleOnChange(text)} 
    />
  );
};

export default Input;