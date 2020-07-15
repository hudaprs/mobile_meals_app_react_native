import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

const CategoryMealsItem = ({meal, navigation}) => {
  const {title, duration, complexity, affordability, imageUrl} = meal
  const {
    mealItem,
    mealHeader,
    mealItemImage,
    mealItemContainer,
    mealItemText,
    mealItemFooter,
  } = styles

  return (
    <TouchableOpacity
      style={mealItem}
      onPress={() => navigation.navigate('MealDetail', meal)}>
      <View style={mealHeader}>
        <ImageBackground source={{uri: imageUrl}} style={mealItemImage}>
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
})

export default CategoryMealsItem
