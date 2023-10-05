import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export default function AddHabitOne() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Text style={{ color: "white" }}>Créer une habitude personnalisée</Text>
    </View>
  )
}
