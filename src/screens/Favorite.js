import React, {useEffect, useContext} from 'react'
import {SafeAreaView, FlatList} from 'react-native'

// Components
import FavoriteItem from '@components/FavoriteItem'

// Global Styles
import {globalStyles} from '@globalStyles/global'

// Context
import FavoriteContext from '@context/favorite/FavoriteContext'

const Favorite = ({navigation}) => {
  const {favs, getFavorites} = useContext(FavoriteContext)

  const {containerWithSpace} = globalStyles

  useEffect(() => {
    getFavorites()
  }, [favs])

  return (
    <SafeAreaView style={containerWithSpace}>
      <FlatList
        data={favs}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <FavoriteItem fav={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  )
}

export default Favorite
