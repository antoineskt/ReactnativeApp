import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextBase,
  Button,
} from "react-native"
import React, { useContext } from "react"
import { HabitContext } from "../context/HabitContext"

interface ToDoProps {
  id: string
  name: string
}

export default function ToDo({ id, name }: ToDoProps) {
  const { items, deleteTask } = useContext(HabitContext)

  return (
    <View>
      <View>{name}</View>{" "}
      <Button onPress={() => deleteTask(id)} title="supprimer" />
    </View>
  )
}
