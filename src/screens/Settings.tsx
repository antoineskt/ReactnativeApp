import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts, Roboto_900Black } from '@expo-google-fonts/roboto'
import { useNavigation } from '@react-navigation/native'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Settings = () => {
  const navigation = useNavigation()

  const [fontsLoaded] = useFonts({ Roboto_900Black })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />

        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigation.navigate('AddHabitTwo')}
        >
          <Text style={styles.textTouchableOpacity}>LAISSEZ NOUS UN AVIS</Text>
        </TouchableOpacity>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />

        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigation.navigate('AddHabitTwo')}
        >
          <Text style={styles.textTouchableOpacity}>CONTACTEZ NOUS</Text>
        </TouchableOpacity>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />

        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigation.navigate('AddHabitTwo')}
        >
          <Text style={styles.textTouchableOpacity}>PARTAGER</Text>
        </TouchableOpacity>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />

        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigation.navigate('AddHabitTwo')}
        >
          <Text style={styles.textTouchableOpacity}>ASTUCES</Text>
        </TouchableOpacity>
      </View>

      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    flex: 1,
  },

  body: {
    flex: 10,
  },

  touchableOpacity: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: '6%',
  },

  textTouchableOpacity: {
    fontFamily: 'Roboto_900Black',
    textTransform: 'uppercase',
  },
})

export default Settings
