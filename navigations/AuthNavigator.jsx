import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Contacts from '../screens/Contacts'
import { LOGIN, SIGNUP } from '../hooks/constants/routeNames'
import Login from '../screens/Login'
import Register from '../screens/Register'

export default function AuthNavigator() {
   const AuthStack = createStackNavigator()
  return (
   <AuthStack.Navigator screenOptions={{
    headerShown:false
   }}>
         <AuthStack.Screen name={LOGIN} component={Login}>

         </AuthStack.Screen>
         <AuthStack.Screen name={SIGNUP} component={Register}>

         </AuthStack.Screen>
   </AuthStack.Navigator>
  )
}