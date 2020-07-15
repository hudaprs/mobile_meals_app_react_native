import React, {useContext} from 'react'
import {View, FlatList, SafeAreaView} from 'react-native'

// Context
import CategoryContext from '@context/category/CategoryContext'

// Components
import CategoryItem from '@components/CategoryItem'

// Global Styles
import {globalStyles} from '@globalStyles/global'

const Categories = ({navigation}) => {
  const {categories} = useContext(CategoryContext)

  const {container} = globalStyles

  return (
    <SafeAreaView style={container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        numColumns={2}
        data={categories}
        renderItem={({item}) => (
          <CategoryItem key={item.id} category={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  )
}

export default Categories
