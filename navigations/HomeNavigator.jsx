 import { View, Text } from 'react-native'
 import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Contacts from '../screens/Contacts/index'
import { CONTACT_DETAILS, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from '../hooks/constants/routeNames'
import ContactDetail from '../screens/ContactDetail'
import CreateContact from '../screens/CreateContact'
import Settings from '../screens/Settings'
 
 export default function HomeNavigator() {
    const HomeStack = createStackNavigator()
   return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST} screenOptions={
        {
            headerShown:false
        }
    }>
          <HomeStack.Screen name={CONTACT_LIST} component={Contacts}>
          </HomeStack.Screen>
          <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetail}>
          </HomeStack.Screen>
          <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}>
          </HomeStack.Screen>
          <HomeStack.Screen name={SETTINGS} component={Settings}>
          </HomeStack.Screen>
    </HomeStack.Navigator>
   )
 }