import React from "react"
import { useEffect } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Button from "../components/Button"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function HomeScreen() {
  const navigation = useNavigation()
  const [items, setItems] = React.useState("")

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("my-key")
      if (value !== null) {
        setItems(value)
      }
    } catch (e) {
      console.error("Error retrieving data:", e)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      {items.length < 1 && (
        <View>
          <Text style={{ color: "white" }}>
            Créer une habitude personnalisée dès maintenant afin de suivre et
            d'accomplir tes objectifs
          </Text>
          <Button onPress={() => navigation.navigate("AddHabitOne")}>
            Click me
          </Button>
        </View>
      )}
      {items.length >= 1 && (
        <View>
          <Text style={{ color: "white" }}>{items}</Text>
        </View>
      )}
    </View>
  )
}
