import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AddHabitOne() {
  const navigation = useNavigation()
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.navigate('AddHabitTwo')}>
          Objectif personnalisé
        </Button>
        <Text style={{ color: 'black' }}>Ou utilise un modèle :</Text>
        <Button onPress={() => navigation.navigate('AddHabitTwo')}>
          Running
        </Button>
        <Button onPress={() => navigation.navigate('AddHabitTwo')}>
          Workout
        </Button>
        <Button onPress={() => navigation.navigate('AddHabitTwo')}>
          Arrêter de fumer
        </Button>
      </View>
      <Footer />
    </View>
  )
}
