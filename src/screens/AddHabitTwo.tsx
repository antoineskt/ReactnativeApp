import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import Button from "../components/Button"
import AsyncStorage from "@react-native-async-storage/async-storage"
import React from "react"

export default function AddHabitTwo() {
  const navigation = useNavigation()
  const [value, onChangeText] = React.useState("")

  const storeData = async (value: string) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem("my-key", jsonValue)
    } catch (e) {
      // saving error
    }
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Text style={{ color: "white" }}>Quel est votre objectif ? </Text>
      <TextInput
        onChangeText={(text) => onChangeText(text)}
        value={value}
        style={{
          backgroundColor: "#212121",
          width: 200,
          margin: 10,
          color: "white",
        }}
      ></TextInput>
      <Button
        onPress={() => {
          navigation.navigate("Home")
          storeData(value)
        }}
      >
        Valider
      </Button>
    </View>
  )
}
