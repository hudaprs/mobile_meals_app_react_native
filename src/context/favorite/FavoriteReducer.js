import {ADD_TO_FAVORITES, GET_FAVORITES, REMOVE_FAVORITE} from './types'

export default (state, {type, payload}) => {
  switch (type) {
    case GET_FAVORITES:
      return {
        ...state,
        favs: payload,
      }
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favs: [payload, ...state.favs],
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        favs: state.favs.filter((fav) => fav.id !== payload),
      }
    default:
      return state
  }
}
