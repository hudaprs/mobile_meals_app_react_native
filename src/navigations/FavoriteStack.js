import React from 'react'
import {TouchableOpacity} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

// Icon
import Icon from 'react-native-vector-icons/dist/FontAwesome'

// Screens
import Favorite from '@screens/Favorite'

const Stack = createStackNavigator()

const FavoriteStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#4a148c',
        },
        headerTintColor: 'white',
      })}>
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={({navigation}) => ({
          title: 'Favorites',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon name="list" size={20} color={'white'} />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            padding: 10,
          },
        })}
      />
    </Stack.Navigator>
  )
}

export default FavoriteStack
