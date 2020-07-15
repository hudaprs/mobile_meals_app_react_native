import 'react-native-gesture-handler'
import React from 'react'

// Navigations
import RootStack from '@navigations/RootStack'

// Context
import CategoryState from '@context/category/CategoryState'
import MealState from '@context/meal/MealState'
import FavoriteState from '@context/favorite/FavoriteState'

const App = () => {
  return (
    <CategoryState>
      <MealState>
        <FavoriteState>
          <RootStack />
        </FavoriteState>
      </MealState>
    </CategoryState>
  )
}

export default App
