import React from 'react'
import {View, Text, Switch, StyleSheet} from 'react-native'

const FilterSwitch = ({label, value, onChange}) => {
  const {filterContainer} = styles

  return (
    <View style={filterContainer}>
      <Text>{label}</Text>
      <Switch value={value} onValueChange={onChange} />
    </View>
  )
}

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
})

export default FilterSwitch
