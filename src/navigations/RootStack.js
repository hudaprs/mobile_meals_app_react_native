import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

// Navigations
import Drawers from './Drawers'

const Stack = createStackNavigator()

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="App" component={Drawers} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack
