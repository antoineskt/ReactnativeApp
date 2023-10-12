import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextBase,
  Button,
} from 'react-native'
import React, { useContext } from 'react'
import { HabitContext } from '../context/HabitContext'
import Svg, { Circle, Rect } from 'react-native-svg'

import Trash from '../../assets/trash.svg'

interface ToDoProps {
  id: string
  name: string
}

export default function ToDo({ id, name }: ToDoProps) {
  const { items, deleteTask } = useContext(HabitContext)

  return (
    <View style={{ backgroundColor: 'purple' }}>
      <Text style={{ color: 'white' }}>{name}</Text>

      <Trash />
    </View>
  )
}
