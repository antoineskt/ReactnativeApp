import { TouchableOpacity, View, Text } from 'react-native'
import React, { ReactNode } from 'react'

interface DayButtonProps {
  children: ReactNode
}

export default function DayButton({ children }: DayButtonProps) {
  return (
    <TouchableOpacity style={{ padding: 5 }}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}
