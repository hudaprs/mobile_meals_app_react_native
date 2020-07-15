import React, {useState} from 'react'
import {View, Text} from 'react-native'

// Components
import FilterSwitch from '@components/FilterSwitch'

// Global Styles
import {globalStyles} from '@globalStyles/global'

const Filter = () => {
  const {containerWithSpace} = globalStyles

  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false)

  return (
    <View style={containerWithSpace}>
      <FilterSwitch
        label={'Gluten Free'}
        value={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label={'Lactose Free'}
        value={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label={'Vegan'}
        value={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label={'Vegetarian'}
        value={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  )
}

export default Filter
