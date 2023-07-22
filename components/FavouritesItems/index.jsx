import { Dimensions, FlatList, View } from 'react-native'
import React from 'react'
import FavouritesItem from './FavouritesItem'
import { MEASUREMENTS } from '../../config/configUtilities'
import AppButton from '../AppButton'

const FavouritesItemsProducts = [
  {
    image: require("../../jonny-caspari-wsvCC6UyKjs-unsplash1.jpg"),
    name: "Coffee Table",
    price: 50.00,
  },
  {
    image: require("../../jonny-caspari-wsvCC6UyKjs-unsplash1.jpg"),
    name: "Coffee Table",
    price: 50.00,
  },
  {
    image: require("../../jonny-caspari-wsvCC6UyKjs-unsplash1.jpg"),
    name: "Coffee Table",
    price: 50.00,
  },
  {
    image: require("../../jonny-caspari-wsvCC6UyKjs-unsplash1.jpg"),
    name: "Coffee Table",
    price: 50.00,
  },
  {
    image: require("../../jonny-caspari-wsvCC6UyKjs-unsplash1.jpg"),
    name: "Coffee Table",
    price: 50.00,
  },
  {
    image: require("../../jonny-caspari-wsvCC6UyKjs-unsplash1.jpg"),
    name: "Coffee Table",
    price: 50.00,
  },
  {
    image: require("../../jonny-caspari-wsvCC6UyKjs-unsplash1.jpg"),
    name: "Coffee Table",
    price: 50.00,
  },
  {
    image: require("../../jonny-caspari-wsvCC6UyKjs-unsplash1.jpg"),
    name: "Coffee Table",
    price: 50.00,
  },
  {
    image: require("../../jonny-caspari-wsvCC6UyKjs-unsplash1.jpg"),
    name: "Coffee Table",
    price: 50.00,
  },
  {
    image: require("../../jonny-caspari-wsvCC6UyKjs-unsplash1.jpg"),
    name: "Coffee Table",
    price: 50.00,
  },
  {
    image: require("../../jonny-caspari-wsvCC6UyKjs-unsplash1.jpg"),
    name: "Coffee Table",
    price: 50.00,
  },
]

const PopularItems = () => {
  // const { width } = Dimensions.get("window");
  return (
    <View>
      <>
        <FlatList
          // columnWrapperStyle={{ width:  }}
          // contentContainerStyle={{ width: width - (MEASUREMENTS.paddingHorizontal * 2), marginVertical: 25, }}
          data={FavouritesItemsProducts}
          keyExtractor={(_, index) => index}
          renderItem={({ item }) => (<FavouritesItem cardItem={item} />)}
          showsVerticalScrollIndicator={false}
        />
        {/* <AppButton /> */}
      </>
    </View>
  )
}

export default PopularItems