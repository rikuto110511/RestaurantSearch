import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  buttonLabel: {
    fontSize: 20,
  },
});

const Button = ({ buttonName, displayValue }) => {
  const testFunction = () => {
    alert(displayValue);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={testFunction}>
      <Ionicons name={buttonName} size={150} color="black" />
      <Text style={styles.buttonLabel}>{displayValue}</Text>
    </TouchableOpacity>
  );
};

export default Button;
