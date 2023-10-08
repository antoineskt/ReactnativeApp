import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Button from "../components/Button"
import { useNavigation } from "@react-navigation/native"

export default function AddHabitOne() {
  const navigation = useNavigation()
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Button onPress={() => navigation.navigate("AddHabitTwo")}>
        Objectif personnalisé
      </Button>
      <Text style={{ color: "white" }}>Ou utilise un modèle :</Text>
      <Button onPress={() => navigation.navigate("AddHabitTwo")}>
        Running
      </Button>
      <Button onPress={() => navigation.navigate("AddHabitTwo")}>
        Workout
      </Button>
      <Button onPress={() => navigation.navigate("AddHabitTwo")}>
        Arrêter de fumer
      </Button>
    </View>
  )
}
