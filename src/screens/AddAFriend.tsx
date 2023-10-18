import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import {
  useFonts,
  Roboto_900Black,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import Footer from '../components/Footer'

const AddAFriend = () => {
  const navigation = useNavigation()

  const [fontsLoaded] = useFonts({ Roboto_900Black, Roboto_400Regular })

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
    flex: 1,
  },

  body: {
    padding: '5%',
    flex: 10,
  },

  bodyText: {
    height: '10%',
    marginTop: '5%',
    fontFamily: 'Roboto_900Black',
    textTransform: 'uppercase',
  },

  textInput: {
    backgroundColor: 'rgba(0, 0, 0, 0.03)',

    fontFamily: 'Roboto_400Regular',
    fontSize: 30,
    marginBottom: 20,
  },

  buttonValidate: {
    borderRadius: 4,
    paddingVertical: 20,
    marginTop: 20,
  },

  buttonText: {
    fontFamily: 'Roboto_900Black',
    textTransform: 'uppercase',
    letterSpacing: 0.04,
    color: 'white',

    alignSelf: 'center',
  },
})

export default AddAFriend
