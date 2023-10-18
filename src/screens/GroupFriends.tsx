import {
  ImageBackground,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
  Button,
} from 'react-native'

import React, { useCallback, useEffect, useState } from 'react'

import { useFonts, Roboto_900Black } from '@expo-google-fonts/roboto'

import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

import Icon from 'react-native-vector-icons/FontAwesome'
import Footer from '../components/Footer'
import Header from '../components/Header'

const GroupFriends = () => {
  const navigation = useNavigation()

  const [fontsLoaded] = useFonts({ Roboto_900Black })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={{ flex: 1 }}></View>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },

  viewValidate: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  secondViewValidate: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonValidate: {
    borderRadius: 4,
    paddingVertical: 30,
    paddingHorizontal: 32,
  },

  buttonText: {
    fontFamily: 'Roboto_900Black',
    textTransform: 'uppercase',
    letterSpacing: 0.04,
    color: 'white',

    alignSelf: 'center',
  },

  textTwo: {
    fontFamily: 'Roboto_900Black',
    textTransform: 'uppercase',
    letterSpacing: 0.04,
    color: 'white',
  },
})

export default GroupFriends
