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

const PopularItems = () => {
  return (
    <FlatList
      bounces={false} // for ios
      data={FavouritesItemsProducts}
      keyExtractor={(_, index) => index}
      renderItem={({ item }) => (<FavouritesItem cardItem={item} />)}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default PopularItems