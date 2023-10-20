import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Button from '../components/Button'
import dayjs from 'dayjs'
import fr from 'dayjs/locale/fr'
import { HabitContext } from '../context/HabitContext'
import ToDoList from '../components/ToDoList'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { DateSelectorHome } from '../components/DateSelectorHome'

dayjs.locale({
  ...fr,
  weekStart: 1,
})

export default function HomeScreen() {
  const navigation = useNavigation()
  const { items, selectedDateFormatted, setselectedDateFormatted } =
    useContext(HabitContext)

  console.log('homepage')
  console.log(items)

  return (
    <View style={{ flex: 1 }}>
      <Header />
      {items.length < 1 && (
        <View style={{ flex: 1 }}>
          <Text style={{}}>
            Créer une habitude personnalisée dès maintenant afin de suivre et
            d'accomplir tes objectifs
          </Text>
          <Button onPress={() => navigation.navigate('AddHabitOne')}>
            Click me
          </Button>
        </View>
      )}
      {items.length >= 1 && (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <DateSelectorHome
            selectedDateFormatted={selectedDateFormatted}
            setselectedDateFormatted={setselectedDateFormatted}
          />
          <ToDoList selectedDateFormatted={selectedDateFormatted} />
        </View>
      )}
      <Footer />
    </View>
  )
}
