import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import DaysOfWeek from './DaysOfWeek'
import dayjs, { Dayjs } from 'dayjs'
import fr from 'dayjs/locale/fr'

const today = dayjs() //today without format
const formattedDateOfToday = today.format('dddd D MMMM')
const formattedDateOfTodayForCompair = today.format('YYYY-MM-DD')
const startOfWeek = dayjs().startOf('week')

const weekdays = new Array(7)
  .fill(startOfWeek)
  .map((day, idx) => day.add(idx, 'day'))

interface DateSelectorAddHabitsProps {
  setselectedDateFormatted: React.Dispatch<React.SetStateAction<Dayjs[]>>
  selectedDateFormatted: Dayjs[]
}

export default function DateSelectorAddHabits({
  setselectedDateFormatted,
  selectedDateFormatted,
}: DateSelectorAddHabitsProps) {
  //ajoute les dates cliqués sélectionnés au bon format dans un tableau
  let arrayOfselectedDateFormattedRightFormat: string[] = []
  if (selectedDateFormatted && selectedDateFormatted.length >= 1) {
    arrayOfselectedDateFormattedRightFormat = selectedDateFormatted.map(
      (day: Dayjs) => day.format('dddd D MMMM')
    )
  }

  //ajoute au state selectedDate le jour cliqué
  const handleDayClick = (day: Dayjs): void => {
    const formattedClickDay = day.format('dddd D MMMM')
    if (
      selectedDateFormatted.length >= 1 &&
      arrayOfselectedDateFormattedRightFormat.includes(formattedClickDay)
    ) {
      //renvoie un tableau sans le jour séléctionné
      //permet la deselection d'une date
      setselectedDateFormatted(
        selectedDateFormatted.filter(
          (day: Dayjs) => day.format('dddd D MMMM') !== formattedClickDay
        )
      )
    }
    //sinon on ajoute normalement la nouvelle date cliqué au dates existantes
    else if (selectedDateFormatted.length >= 1) {
      setselectedDateFormatted([...selectedDateFormatted, day])
    } //on ajoute simplement la date selectionné car il n'y en a pas encore
    else {
      setselectedDateFormatted([day])
    }
  }

  return (
    <DaysOfWeek
      weekdays={weekdays}
      handleDayClick={handleDayClick}
      selectedDateFormatted={selectedDateFormatted}
      arrayOfselectedDateFormattedRightFormat={
        arrayOfselectedDateFormattedRightFormat
      }
    />
  )
}
