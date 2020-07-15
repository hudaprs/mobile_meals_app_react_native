import React from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from 'react-native'
import PropTypes from 'prop-types'

// Global Styles
import {globalStyles} from '@globalStyles/global'

const CategoryItem = ({category, navigation}) => {
  const {gridItem} = globalStyles
  const {categoryItemContainer, categoryItemTitle} = styles

  const {color} = category

  let TouchableComponent = TouchableOpacity
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback
  }

  return (
    <View style={gridItem}>
      <TouchableComponent
        style={{flex: 1}}
        onPress={() => navigation.navigate('CategoryDetail', category)}>
        <View style={[categoryItemContainer, {backgroundColor: color}]}>
          <Text style={categoryItemTitle} numberOfLines={2}>
            {category.title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  )
}

CategoryItem.propTypes = {
  category: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
  categoryItemContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {widht: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  categoryItemTitle: {
    fontFamily: 'OpenSans-bold',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'right',
  },
})

export default CategoryItem
