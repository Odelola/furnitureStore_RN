import { FlatList } from 'react-native'
import FavouritesItem from './FavouritesItem'

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

const FavouritesItems = ({ bottomTabHeight }) => {
  return (
    <FlatList
    contentContainerStyle={{ paddingBottom: bottomTabHeight * 2.75 }}
      bounces={false} // for ios
      data={FavouritesItemsProducts}
      keyExtractor={(_, index) => index}
      renderItem={({ item, index }) => (<FavouritesItem cardItem={item} lastItemOnTheList={index == FavouritesItemsProducts.length - 1} />)}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default FavouritesItems