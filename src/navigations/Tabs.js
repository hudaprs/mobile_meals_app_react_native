import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

// Navigations
import CategoryStack from './CategoryStack'
import FavoriteStack from './FavoriteStack'

// Icons
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      lazy={false}
      tabBarOptions={{
        style: {
          backgroundColor: '#4a148c',
        },
        activeTintColor: 'white',
        inactiveTintColor: '#ccc',
      }}>
      <Tab.Screen
        name="Meals"
        component={CategoryStack}
        options={{
          tabBarIcon: ({focuzed, size, color}) => (
            <Icon name="cutlery" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteStack}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <Icon name="star" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs
