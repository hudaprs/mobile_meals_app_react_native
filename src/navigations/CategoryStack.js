import React, {useContext} from 'react'
import {TouchableOpacity} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

// Components
import Categories from '@screens/Categories'
import CategoryDetail from '@screens/CategoryDetail'
import MealDetail from '@screens/MealDetail'

// Icons
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const Stack = createStackNavigator()

const CategoryStack = () => {
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
        name="Categories"
        component={Categories}
        options={({navigation}) => ({
          title: 'Meals Category',
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
      <Stack.Screen
        name="CategoryDetail"
        component={CategoryDetail}
        options={({route}) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetail}
        options={({route}) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  )
}

export default CategoryStack
