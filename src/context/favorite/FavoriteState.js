import React, {useReducer} from 'react'
import FavoriteContext from './FavoriteContext'
import FavoriteReducer from './FavoriteReducer'
import {ADD_TO_FAVORITES, GET_FAVORITES, REMOVE_FAVORITE} from './types'

const FavoriteState = ({children}) => {
  const initialState = {
    favs: [],
  }

  const [state, dispatch] = useReducer(FavoriteReducer, initialState)

  const getFavorites = () => {
    dispatch({type: GET_FAVORITES, payload: favs})
  }

  const addToFavorites = (meals) => {
    const findFav = favs.find((fav) => fav.id === meals.id)
    if (findFav) {
      return false
    } else {
      dispatch({type: ADD_TO_FAVORITES, payload: meals})
    }
  }

  const removeFav = (id) => {
    dispatch({type: REMOVE_FAVORITE, payload: id})
  }

  const {favs} = state

  return (
    <FavoriteContext.Provider
      value={{favs, getFavorites, addToFavorites, removeFav}}>
      {children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteState
