import React, {useReducer} from 'react'
import CategoryContext from './CategoryContext'
import CategoryReducer from './CategoryReducer'

// Fake data
import categoryData from '@data/categories'

const CategoryState = ({children}) => {
  const initialState = {
    categories: categoryData,
  }

  const [state, dispatch] = useReducer(CategoryReducer, initialState)

  const {categories} = state

  return (
    <CategoryContext.Provider value={{categories}}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryState
