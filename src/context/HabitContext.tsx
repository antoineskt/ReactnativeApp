import { createContext } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'

interface Item {
  id: string
  name: string
  date: string[] | null
  totalDate: number | null
  totalTaskDone: number
  serie: number
  dateIsDone: never[]
  dateDayJS: dayjs.Dayjs[] | null
}

interface HabitContextProps {
  items: Item[]
  deleteTask: (id: string) => void
  setItems: Dispatch<SetStateAction<Item[]>>
  editTask: (id: string, newName: string) => void
  selectedDateFormatted: string
  setselectedDateFormatted: Dispatch<SetStateAction<string>>
}

export const HabitContext = createContext<HabitContextProps>({
  items: [], //value by default
  setItems: () => {},
  deleteTask: (id: string) => {},
  editTask: (id: string, newName: string) => {},
  selectedDateFormatted: '',
  setselectedDateFormatted: () => {},
})

const HabitProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedDateFormatted, setselectedDateFormatted] = useState(
    dayjs().format('dddd D MMMM')
  )
  const [items, setItems] = useState<Item[]>([])
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('my-key')
      if (jsonValue !== null) {
        const value = JSON.parse(jsonValue)

        console.log('valuee : ' + value)
        console.log('getData ici')
        setItems(value)
      }
    } catch (e) {
      console.error('error retrieving data: ' + e)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const deleteTask = (id: string): void => {
    const remainingTasks = items.filter((task) => id !== task.id)
    setItems(remainingTasks)
    AsyncStorage.setItem('my-key', JSON.stringify(remainingTasks))
    getData()
  }

  const editTask = (id: string, newName: string): void => {
    const editedTaskList = items.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName }
      }
      return task
    })
    setItems(editedTaskList)
    AsyncStorage.setItem('my-key', JSON.stringify(editedTaskList))
  }

  const contextValues = {
    items,
    setItems,
    deleteTask,
    editTask,
    selectedDateFormatted,
    setselectedDateFormatted,
  }

  return (
    <HabitContext.Provider value={contextValues}>
      {children}
    </HabitContext.Provider>
  )
}

export default HabitProvider
