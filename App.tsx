import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './src/navigation/types'
import HomeScreen from './src/screens/HomeScreen'
import AddHabitOne from './src/screens/AddHabitOne'
import AddHabitTwo from './src/screens/AddHabitTwo'
import HabitProvider from './src/context/HabitContext'
import Stats from './src/screens/Stats'
import Settings from './src/screens/Settings'
import GroupFriends from './src/screens/GroupFriends'
import AddAFriend from './src/screens/AddAFriend'
import Profil from './src/screens/Profil'
import Message from './src/screens/Message'
import 'react-native-get-random-values'
import React from 'react'

// CAREFUL TO WRITE TYPE OF EACH SCREEN
const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <React.StrictMode>
      <HabitProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="AddHabitOne"
              component={AddHabitOne}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="AddHabitTwo"
              component={AddHabitTwo}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Stats"
              component={Stats}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Settings"
              component={Settings}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="GroupFriends"
              component={GroupFriends}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="AddAFriend"
              component={AddAFriend}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Profil"
              component={Profil}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Message"
              component={Message}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </HabitProvider>
    </React.StrictMode>
  )
}
