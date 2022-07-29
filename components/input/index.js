import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import colors from "../../assets/themes/colors";

export default function Input({
  style,
  label,
  onChangeText,
  value,
  icon,
  iconPosition,
  error,
  ...props
}) {
  const [focused, setFocused] = useState(false);

  function getFlexDirection() {
    if (icon && iconPosition) {
      if (iconPosition == "left") {
        return "row";
      } else if (iconPosition == "right") {
        return "row-reverse";
      }
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
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          {  borderColor: getBorderColor(), flexDirection: getFlexDirection() },
        ]}
      >
        <View style={{alignSelf:"center"}}>{icon && icon}</View>
        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={value}
        />
      </View>

      {error && <Text style={styles.textError}>{error}</Text>}
    </View>
  );
}
