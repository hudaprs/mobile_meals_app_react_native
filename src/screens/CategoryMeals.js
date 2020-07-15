import React, {useContext} from 'react'
import {View, Text, FlatList} from 'react-native'

// Context

const CategoryMeals = () => {
  const {meals} = useContext(MealContext)

  return (
    <View>
      <Text>Hello</Text>
    </View>
  )
}

export default CategoryMeals
