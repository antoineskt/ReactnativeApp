import React, { useContext } from 'react'
import { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Button from '../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import dayjs from 'dayjs'
import fr from 'dayjs/locale/fr'
import { HabitContext } from '../context/HabitContext'
import ToDoList from '../components/ToDoList'

dayjs.locale({
  ...fr,
  weekStart: 1,
})

export default function HomeScreen() {
  const navigation = useNavigation()
  const { items } = useContext(HabitContext)
  console.log(items)
  console.log('items   s: ' + items)

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}
    >
      {items.length < 1 && (
        <View>
          <Text style={{ color: 'white' }}>
            Créer une habitude personnalisée dès maintenant afin de suivre et
            d'accomplir tes objectifs
          </Text>
          <Button onPress={() => navigation.navigate('AddHabitOne')}>
            Click me
          </Button>
        </View>
      )}
      {items.length >= 1 && (
        <View>
          <ToDoList />
        </View>
      )}
    </View>
  )
}
