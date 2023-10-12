import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "./src/navigation/types"
import HomeScreen from "./src/screens/HomeScreen"
import AddHabitOne from "./src/screens/AddHabitOne"
import AddHabitTwo from "./src/screens/AddHabitTwo"
import HabitProvider from "./src/context/HabitContext"
import 'react-native-get-random-values'

// CAREFUL TO WRITE TYPE OF EACH SCREEN
const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <HabitProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddHabitOne" component={AddHabitOne} />
          <Stack.Screen name="AddHabitTwo" component={AddHabitTwo} />
        </Stack.Navigator>
      </HabitProvider>
    </NavigationContainer>
  )
}
