import { TouchableOpacity, View, Text } from 'react-native'
import React, { ReactNode } from 'react'

interface DayButtonProps {
  children: ReactNode
}

export default function DayButton({ children }: DayButtonProps) {
  return (
    <TouchableOpacity
      style={{
        padding: 5,
        backgroundColor: '#212121',
        borderRadius: 8,
        width: 45,
        height: 35,
        margin: 5,
      }}
    >
      <Text style={{ color: 'white' }}>{children}</Text>
    </TouchableOpacity>
  )
}
