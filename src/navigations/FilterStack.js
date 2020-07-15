import React from 'react'
import {TouchableOpacity} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

// Icons
import Icon from 'react-native-vector-icons/dist/FontAwesome'

// Screens
import Filter from '@screens/Filter'

const Stack = createStackNavigator()

const FilterStack = () => {
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
        name="Filter"
        component={Filter}
        options={({navigation}) => ({
          title: 'Meals Category',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon name="list" size={20} color={'white'} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => {}}>
              <Icon name="save" size={20} color={'white'} />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            padding: 10,
          },
          headerRightContainerStyle: {
            padding: 10,
          },
        })}
      />
    </Stack.Navigator>
  )
}

export default FilterStack
