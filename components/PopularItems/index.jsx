import { FlatList } from 'react-native'
import PopularItem from './PopularItem'

const PopularProducts = [
  {
    image: require("../../jonny-caspari-wsvCC6UyKjs-unsplash1.jpg"),
    name: "Black Simple Lamp",
    price: 12.00,
  },
  {
    image: require("../../jonny-caspari-wsvCC6UyKjs-unsplash1.jpg"),
    name: "Lamp",
    price: 12.00,
  },
  {
    image: require("../../jonny-caspari-wsvCC6UyKjs-unsplash1.jpg"),
    name: "Lamp",
    price: 12.00,
  },
  {
    image: require("../../jonny-caspari-wsvCC6UyKjs-unsplash1.jpg"),
    name: "Lamp",
    price: 12.00,
  },
  {
    image: require("../../jonny-caspari-wsvCC6UyKjs-unsplash1.jpg"),
    name: "Lamp",
    price: 12.00,
  },
  {
    image: require("../../jonny-caspari-wsvCC6UyKjs-unsplash1.jpg"),
    name: "Lamp",
    price: 12.00,
  },
]

const PopularItems = ({ data }) => {

  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={(_, index) => index}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (<PopularItem cardItem={item} key={item._id} index={index} />)}
    />
  )
}

export default PopularItems