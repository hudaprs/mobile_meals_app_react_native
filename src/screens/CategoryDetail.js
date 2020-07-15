import React, {useContext} from 'react'
import {SafeAreaView, FlatList} from 'react-native'

// Components
import CategoryMealsItem from '@components/CategoryMealsItem'

// Global Styles
import {globalStyles} from '@globalStyles/global'

// Context
import MealContext from '@context/meal/MealContext'

const CategoryDetail = ({route, category, navigation}) => {
  const {containerWithSpace} = globalStyles
  const {id, title} = route.params

  const {meals} = useContext(MealContext)

  const displayedMeals = meals.filter(
    (meal) => meal.categoryIds.indexOf(id) >= 0,
  )

  return (
    <SafeAreaView style={containerWithSpace}>
      <FlatList
        data={displayedMeals}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => 
          <CategoryMealsItem 
            meal={item} 
            navigation={navigation}
          />
        }
      />
    </SafeAreaView>
  )
}

export default CategoryDetail
