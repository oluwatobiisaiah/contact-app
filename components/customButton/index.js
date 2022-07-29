import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import colors from "../../assets/themes/colors";

export default function CustomButton({
title,
loading,
disabled,
secondary,
primary,danger,
  ...props
}) {

  function getbackgroundColor() {

    if(disabled){
        return colors.GREY
    }

    if (primary) {
    return colors.PRIMARY
    }
    if(secondary){
        return colors.SECONDARY
    }
    if(danger){
        return colors.DANGER
    }
  }

  function getBorderColor() {


    if (error) {
      return colors.DANGER;
    }else if(focused){
        return colors.PRIMARY;
     }
    
    else {
      return colors.GREY;
    }
  }
  return (
    <TouchableOpacity
     style={[styles.inputContainer]}
     disabled={disabled}
     onPress = {onPress} 
     >
      {title&&<Text style={{color:disabled?"black":"white"}}>{title}</Text>}
    </TouchableOpacity>
  );
}
