import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Stats() {
  console.log('stat pagee')
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1 }}></View>
      <Footer />
    </View>
  )
}
