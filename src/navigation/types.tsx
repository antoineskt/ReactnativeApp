import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native"

export type RootStackParamList = {
  Home: undefined
  AddHabitOne: undefined
  AddHabitTwo: undefined
}

export type HomeTabParamList = {
  Popular: undefined
  Latest: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
