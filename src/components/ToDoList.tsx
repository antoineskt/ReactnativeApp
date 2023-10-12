import { HabitContext } from '../context/HabitContext'
import ToDo from './ToDo'
import React, { useContext } from 'react'
import { View } from 'react-native'

export default function ToDoList() {
  const { items } = useContext(HabitContext)

  return (
    <View style={{ flex: 1 }}>
      {items.map((habit) => (
        <ToDo key={habit.id} id={habit.id} name={habit.name} />
      ))}
    </View>
  )
}
