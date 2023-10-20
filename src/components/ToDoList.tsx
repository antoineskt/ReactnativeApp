import { HabitContext } from '../context/HabitContext'
import ToDo from './ToDo'
import React, { useContext } from 'react'
import { View } from 'react-native'

interface ToDoListProps {
  selectedDateFormatted: string
}

export default function ToDoList({ selectedDateFormatted }: ToDoListProps) {
  const { items } = useContext(HabitContext)

  //on vérifie pr chaque tache si elle contient la date
  const filteredTasks = //Si on affiche sur la page home, on filtre par date, si other, non
    items.filter(
      (task) => task.date && task.date.includes(selectedDateFormatted) //Une des dates des taches inclut elle la date selectionné ?
    )

  return (
    <View style={{ flex: 1 }}>
      {items.map((habit) => (
        <ToDo key={habit.id} id={habit.id} name={habit.name} />
      ))}
    </View>
  )
}
