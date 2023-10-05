import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "./navigation/types"
import HomeScreen from "./screens/HomeScreen"
import AddHabitOne from "./screens/AddHabitOne"

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddHabitOne" component={AddHabitOne} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
