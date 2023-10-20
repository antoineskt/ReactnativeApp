import React from 'react'
import { View } from 'react-native'
import DayButton from '../components/DayButton'
import dayjs, { Dayjs } from 'dayjs'

interface DaysOfWeekProps {
  weekdays: Dayjs[]
  handleDayClick: (day: Dayjs) => void
  selectedDateFormatted: Dayjs[] | string
  arrayOfselectedDateFormattedRightFormat?: string[]
}

export default function DaysOfWeek({
  weekdays,
  handleDayClick,
  selectedDateFormatted,
  arrayOfselectedDateFormattedRightFormat,
}: DaysOfWeekProps) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {weekdays.map((day) => (
        <DayButton key={day.toString()}>{day.format('ddd')}</DayButton>
      ))}
    </View>
  )
}
