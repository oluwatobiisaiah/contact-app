import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeNavigator from './HomeNavigator'
import { HOME_NAVIGATOR } from '../hooks/constants/routeNames'

export default function StackNavigator() {
   const StackNavigator = createStackNavigator()
  return (
   <StackNavigator.Navigator screenOptions={{
      // headerShown:false
   }}>
         <StackNavigator.Screen name={HOME_NAVIGATOR} component={HomeNavigator}>

         </StackNavigator.Screen>
   </StackNavigator.Navigator>
  )
}