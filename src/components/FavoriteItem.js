import React, {useContext} from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

// Icons
import Icon from 'react-native-vector-icons/dist/FontAwesome'

import FavoriteContext from '@context/favorite/FavoriteContext'

const FavoriteItem = ({fav, navigation}) => {
  const {id, title, duration, complexity, affordability, imageUrl} = fav
  const {
    mealItem,
    mealHeader,
    mealItemImage,
    mealItemContainer,
    mealItemText,
    mealItemFooter,
    removeFavButton,
  } = styles

  const {removeFav} = useContext(FavoriteContext)

  return (
    <TouchableOpacity
      style={mealItem}
      onPress={() => {
        navigation.navigate('Meals', {
          screen: 'MealDetail',
          params: fav,
        })
      }}>
      <View style={mealHeader}>
        <ImageBackground source={{uri: imageUrl}} style={mealItemImage}>
          <TouchableOpacity
            style={removeFavButton}
            onPress={() => removeFav(id)}>
            <Icon name="times" size={20} color={'white'} />
          </TouchableOpacity>
          <View style={mealItemContainer}>
            <Text style={mealItemText}>{title}</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={mealItemFooter}>
        <Text>{duration}m</Text>
        <Text>{complexity.toUpperCase()}</Text>
        <Text>{affordability.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f4f4f4',
    marginBottom: 15,
    borderRadius: 10,
  },
  mealHeader: {
    height: '85%',
  },
  mealItemContainer: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0, .5)',
  },
  mealItemText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
    fontSize: 20,
  },
  mealItemImage: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    borderRadius: 20,
  },
  mealItemFooter: {
    height: '15%',
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  removeFavButton: {
    position: 'absolute',
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',
    top: 5,
    right: 5,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
})

export default FavoriteItem
