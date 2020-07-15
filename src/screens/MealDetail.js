import React, {useContext} from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native'

// Icons
import Icon from 'react-native-vector-icons/dist/FontAwesome'

// Global Styles
import {globalStyles} from '@globalStyles/global'

// Context
import FavoriteContext from '@context/favorite/FavoriteContext'

const MealDetail = ({route}) => {
  const {container, containerWithSpace} = globalStyles
  const {mealDetailImage, titleHeader, box} = styles

  const {addToFavorites} = useContext(FavoriteContext)

  const {imageUrl, ingredients, steps} = route.params

  return (
    <SafeAreaView style={container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{uri: imageUrl}} style={mealDetailImage} />
        <View style={containerWithSpace}>
          <TouchableOpacity
            onPress={() => addToFavorites(route.params)}
            style={{alignItems: 'center', marginTop: 10}}>
            <Icon name="star" color={'#4a148c'} size={23} />
            <Text style={{fontSize: 12}}>Add To Favs</Text>
          </TouchableOpacity>

          {/* Ingredients */}
          <Text style={titleHeader}>Ingredients</Text>
          {ingredients.length > 0 &&
            ingredients.map((ingredient, index) => (
              <View style={box} key={index}>
                <Text>{ingredient}</Text>
              </View>
            ))}

          {/* Steps */}
          <Text style={titleHeader}>Steps</Text>
          {steps.length > 0 &&
            steps.map((step, index) => (
              <View style={box} key={index}>
                <Text>{step}</Text>
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mealDetailImage: {
    height: 200,
    width: '100%',
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
    marginTop: 10,
  },
  box: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dotted',
  },
})

export default MealDetail
