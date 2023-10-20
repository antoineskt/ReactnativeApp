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
import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DateSelectorAddHabits from '../components/DateSelectorAddHabits'
import dayjs, { Dayjs } from 'dayjs'
import { orderByDate } from '../utils/functionDate'

export default function AddHabitTwo() {
  const navigation = useNavigation()
  const [name, onChangeText] = React.useState('')
  const [selectedDateFormatted, setselectedDateFormatted] = useState<Dayjs[]>(
    []
  )
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null)
  const [listOfRepeatedDateFormatted, setlistOfRepeatedDateFormatted] =
    useState<string[] | null>(null)
  const [listOfRepeatedDate, setlistOfRepeatedDate] = useState<Dayjs[] | null>(
    null
  )
  const { setItems } = useContext(HabitContext)

  function handleRepeatClick(numberOfWeek: number): void {
    setSelectedDuration(numberOfWeek)
    console.log(selectedDuration)
    //si le state contient deja le chiffre du btn cliqué renvoyer 0 pour désactiver la couleur du btn
    if (selectedDuration && selectedDuration === numberOfWeek) {
      setSelectedDuration(0)
      setlistOfRepeatedDateFormatted(null)
      setlistOfRepeatedDate(null)
    }
    // si il y a bien une des dates séléctionnés et une durée :
    else if (selectedDateFormatted.length !== 0 && numberOfWeek >= 1) {
      const repeatedDates = []

      //créaton des dates répétées au format dddd D MMMM
      for (let i = 0; i < numberOfWeek; i++) {
        repeatedDates.push(
          ...orderByDate({ selectedDateFormatted }).map(
            (day: Dayjs) => dayjs(day).add(i, 'week').format('dddd D MMMM') //créer une répétion des dates sélectionnés
          )
        )
      }
      //on met dans le state final les dates répétées formattéss
      setlistOfRepeatedDateFormatted(repeatedDates)

      //création des dates répétés au formay dayJS
      const repeteadDatesDayJs = []
      for (let i = 0; i < numberOfWeek; i++) {
        repeteadDatesDayJs.push(
          ...orderByDate({ selectedDateFormatted }).map(
            (day: Dayjs) => dayjs(day).add(i, 'week') //créer une répétion des dates sélectionnés
          )
        )
      }
      setlistOfRepeatedDate(repeteadDatesDayJs)
    }
  }

  const storeData = async () => {
    try {
      const newDatas = {
        id: `todo-${uuid()}`,
        name,
        date: listOfRepeatedDateFormatted,
        totalDate:
          listOfRepeatedDateFormatted && listOfRepeatedDateFormatted.length, //nombre de dates total pour cet objectif
        totalTaskDone: 0,
        serie: 0,
        dateIsDone: [], //tableau boolean pr chaque jour, si une date validé, true
        dateDayJS: listOfRepeatedDate,
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
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{ color: 'black' }}>Quel est votre objectif ? </Text>
        <TextInput
          onChangeText={(text) => onChangeText(text)}
          value={name}
          style={{
            backgroundColor: '#d8d8d8',
            width: 200,
            margin: 10,
            color: 'white',
            borderRadius: 5,
          }}
        ></TextInput>
        <Text>Quels jours allez vous réaliser votre objectif ?</Text>
        <DateSelectorAddHabits
          setselectedDateFormatted={setselectedDateFormatted}
          selectedDateFormatted={selectedDateFormatted}
        />
        <Text>
          Pendant combien de temps voulez vous réaliser votre objectif ?
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              borderRadius: 7,
              marginRight: 5,
            }}
            onPress={() => handleRepeatClick(2)}
          >
            <Text style={{ color: 'white' }}>Deux semaines</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              borderRadius: 7,
              marginRight: 5,
            }}
            onPress={() => handleRepeatClick(4)}
          >
            <Text style={{ color: 'white' }}>Un mois</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: 'black', borderRadius: 7 }}
            onPress={() => handleRepeatClick(8)}
          >
            <Text style={{ color: 'white' }}>Deux mois</Text>
          </TouchableOpacity>
        </View>

        <Button
          onPress={() => {
            navigation.navigate('Home')
            storeData()
          }}
        >
          Valider
        </Button>
      </View>
      <Footer />
    </View>
  )
}
