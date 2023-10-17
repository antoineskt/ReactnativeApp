import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Button from '../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { v4 as uuid } from 'uuid'
import { HabitContext } from '../context/HabitContext'
import React, { useContext } from 'react'

export default function AddHabitTwo() {
  const navigation = useNavigation()
  const [name, onChangeText] = React.useState('')
  const { setItems } = useContext(HabitContext)

  const storeData = async () => {
    try {
      const newDatas = {
        id: `todo-${uuid()}`,
        name,
      }
      const getDataFromLS = await AsyncStorage.getItem('my-key')
      if (getDataFromLS !== null) {
        const dataParseFromLS = JSON.parse(getDataFromLS)
        const newDataWithDataLS = [...dataParseFromLS, newDatas]
        console.log(newDataWithDataLS)
        await AsyncStorage.setItem('my-key', JSON.stringify(newDataWithDataLS))
        setItems(newDataWithDataLS)
      } else {
        console.log(newDatas)
        await AsyncStorage.setItem('my-key', JSON.stringify([newDatas]))
        setItems([newDatas])
      }
    } catch (e) {
      console.error('error retrieving data: ' + e)
    }
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}
    >
      <Text style={{ color: 'white' }}>Quel est votre objectif ? </Text>
      <TextInput
        onChangeText={(text) => onChangeText(text)}
        value={name}
        style={{
          backgroundColor: '#212121',
          width: 200,
          margin: 10,
          color: 'white',
        }}
      ></TextInput>
      <Button
        onPress={() => {
          navigation.navigate('Home')
          storeData()
        }}
      >
        Valider
      </Button>
    </View>
  )
}
