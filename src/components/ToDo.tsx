import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { HabitContext } from '../context/HabitContext'

import Trash from '../../assets/trash.svg'

interface ToDoProps {
  id: string
  name: string
}

export default function ToDo({ id, name }: ToDoProps) {
  const { items, deleteTask } = useContext(HabitContext)

  return (
    <View
      style={{
        backgroundColor: 'grey',
        flexDirection: 'row',
        width: 100,
        borderRadius: 8,
      }}
    >
      <Text style={{ color: 'white', padding: 2, fontSize: 15 }}>{name}</Text>

      <TouchableOpacity
        onPress={() => deleteTask(id)}
        style={{ flexDirection: 'row', padding: 2 }}
      >
        <Trash />
      </TouchableOpacity>
    </View>
  )
}
