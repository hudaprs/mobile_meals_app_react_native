import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

// Navigations
import CategoryStack from './CategoryStack'
import FavoriteStack from './FavoriteStack'

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Category" component={CategoryStack} />
      <Stack.Screen name="Favorite" component={FavoriteStack} />
    </Stack.Navigator>
  )
}

export default HomeStack
