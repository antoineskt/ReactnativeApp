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
import { nanoid } from "nanoid"

export default function AddHabitTwo() {
  const navigation = useNavigation()
  const [name, onChangeText] = React.useState("")

  const storeData = async () => {
    try {
      const newDatas = {
        id: `todo-${nanoid()}`,
        name,
      }
      const jsonValue = JSON.stringify(newDatas)
      await AsyncStorage.setItem("my-key", jsonValue)
    } catch (e) {
      console.error("error retrieving data: " + e)
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
        value={name}
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
          storeData
        }}
      >
        Valider
      </Button>
    </View>
  )
}
