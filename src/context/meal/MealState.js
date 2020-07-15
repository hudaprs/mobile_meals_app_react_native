import React, {useReducer} from 'react'
import MealContext from './MealContext'
import MealReducer from './MealReducer'

// Fake data
import mealData from '@data/meals'

const MealState = ({children}) => {
  const initialState = {
    meals: mealData,
  }

  const [state, dispatch] = useReducer(MealReducer, initialState)

  const {meals} = state

  return <MealContext.Provider value={{meals}}>{children}</MealContext.Provider>
}

export default MealState
