import React from 'react';
import { View } from 'react-native';
import DayButton from '../components/DayButton';
import dayjs, { Dayjs } from 'dayjs';

interface DaysOfWeekProps {
  weekdays: Dayjs[];
}

export default function DaysOfWeek({ weekdays }: DaysOfWeekProps) {
  return (
    <View>
      {weekdays.map((day) => (
        <DayButton key={day.toString()}>{day.format('ddd')}</DayButton>
      ))}
    </View>
  );
}
