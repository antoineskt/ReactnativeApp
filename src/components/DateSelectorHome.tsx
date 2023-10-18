import dayjs from 'dayjs'
import fr from 'dayjs/locale/fr'
import { View } from 'react-native'
import DaysOfWeek from './DaysOfWeek'

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

export function DateSelectorHome() {
  return <DaysOfWeek weekdays={weekdays} />
}
