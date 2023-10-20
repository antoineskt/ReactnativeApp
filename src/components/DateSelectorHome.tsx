import fr from 'dayjs/locale/fr'
import { View } from 'react-native'
import DaysOfWeek from './DaysOfWeek'
import dayjs, { Dayjs } from 'dayjs'

dayjs.locale({
  ...fr,
  weekStart: 1,
})
const today = dayjs() //today without format
const formattedDateOfToday = today.format('dddd D MMMM')
const formattedDateOfTodayForCompair = today.format('YYYY-MM-DD')
const startOfWeek = dayjs().startOf('week')

const weekdays = new Array(7)
  .fill(startOfWeek)
  .map((day, idx) => day.add(idx, 'day'))

interface DateSelectorHomeProps {
  setselectedDateFormatted: React.Dispatch<React.SetStateAction<string>>
  selectedDateFormatted: Dayjs[] | string
}

export function DateSelectorHome({
  setselectedDateFormatted,
  selectedDateFormatted,
}: DateSelectorHomeProps) {
  const handleDayClick = (day: Dayjs): void => {
    const formattedDate = day.format('dddd D MMMM') //date selectionné formaté
    setselectedDateFormatted(formattedDate)
  }

  return (
    <DaysOfWeek
      weekdays={weekdays}
      handleDayClick={handleDayClick}
      selectedDateFormatted={selectedDateFormatted}
    />
  )
}
