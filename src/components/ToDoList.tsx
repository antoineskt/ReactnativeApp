import { HabitContext } from "../context/HabitContext"
import ToDo from "./ToDo"
import React, { useContext } from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native"

export default function ToDoList() {
  const { items } = useContext(HabitContext)

  return (
    <View>
      {items.map((habit) => (
        <ToDo key={habit.id} id={habit.id} name={habit.name} />
      ))}
    </View>
  );
}
