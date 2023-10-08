import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextBase,
} from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native"

interface ButtonProps {
  onPress: () => void // Specify the type for onPress
  children: string
}

export default function Button({ onPress, children }: ButtonProps) {
  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#212121",
    marginTop: 20,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    padding: 20,
  },
})
