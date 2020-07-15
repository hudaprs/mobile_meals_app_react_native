import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

// Navigations
import Tabs from './Tabs'
import FilterStack from './FilterStack'

const Drawer = createDrawerNavigator()

const Drawers = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        labelStyle: {
          fontFamily: 'OpenSans-Bold',
        },
        activeTintColor: '#4a148c',
      }}>
      <Drawer.Screen name="Home" component={Tabs} />
      <Drawer.Screen name="Filter" component={FilterStack} />
    </Drawer.Navigator>
  )
}

export default Drawers
