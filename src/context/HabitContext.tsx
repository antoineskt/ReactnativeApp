import { useState, useEffect } from "react"
import { createContext } from "react"
import dayjs from "dayjs"
import AsyncStorage from "@react-native-async-storage/async-storage"

interface Item {
  id: string
  name: string
}

interface HabitContextProps {
  items: Item[]
  deleteTask: (id: string) => void
}

export const HabitContext = createContext<HabitContextProps>({
  items: [], //value by default
  deleteTask: (id: string) => {},
})

const HabitProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Item[]>([])

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("my-key")
      if (jsonValue !== null) {
        const value = JSON.parse(jsonValue)
        setItems(value)
      }
    } catch (e) {
      console.error("error retrieving data: " + e)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const deleteTask = (id: string) => {
    const remainingTasks = items.filter((task) => id !== task.id)
    setItems(remainingTasks)
    AsyncStorage.setItem("my-key", JSON.stringify(remainingTasks))
    getData()
  }

  const contextValues = {
    items,
    deleteTask,
  }

  return (
    <HabitContext.Provider value={contextValues}>
      {children}
    </HabitContext.Provider>
  )
}

export default HabitProvider