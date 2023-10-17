import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import React, { useContext } from 'react'
import { HabitContext } from '../context/HabitContext'

import Trash from '../../assets/trash.svg'

interface ToDoProps {
  id: string
  name: string
}

export default function ToDo({ id, name }: ToDoProps) {
  const { deleteTask } = useContext(HabitContext)

  return (
    <View
      style={{
        backgroundColor: 'black',
        flexDirection: 'row',

        borderRadius: 8,
        padding: 10,
        marginLeft: '15%',
        marginRight: '15%',
        marginTop: '10%',
      }}
    >
      <Text style={{ color: 'white', fontSize: 19 }}>{name}</Text>

      <TouchableOpacity
        onPress={() => deleteTask(id)}
        style={{
          flexDirection: 'row',
          paddingLeft: '40%',
          margin: 0,
        }}
      >
        <Trash fill={'white'} />
      </TouchableOpacity>
    </View>
  )
}
