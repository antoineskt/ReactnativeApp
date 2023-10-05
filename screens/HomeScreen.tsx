import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function HomeScreen() {
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
      <Text style={{ color: "white" }}>Créer une habitude personnalisée</Text>
      <Button
        title="Let's go"
        onPress={() => navigation.navigate("HabitOne")}
      ></Button>
    </View>
  )
}
