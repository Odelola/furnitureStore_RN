import { Dimensions, FlatList, View } from 'react-native'
import PopularItem from './PopularItem'
import { MEASUREMENTS } from '../../config/configUtilities'
import { useEffect } from 'react'

const PopularProducts = [
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
  {
    image: require("../../jonny-caspari-wsvCC6UyKjs-unsplash1.jpg"),
    name: "Lamp",
    price: 12.00,
  },
]

const PopularItems = () => {
  const { width } = Dimensions.get("window");

  useEffect(() => {
    // const data = getPopularFurnitures();
    return () => {
      
    }
  }, [])
  
  // getPopularFurnitures();
  return (
    // <View style={{ backgroundColor: "magenta"}}>
    <View>
      <>
        <FlatList
          // columnWrapperStyle={{ width:  }}
          contentContainerStyle={{ display: "none", width: width - (MEASUREMENTS.paddingHorizontal * 2), marginVertical: 25, justifyContent: "space-between" }}
          data={PopularProducts}
          numColumns={2}
          keyExtractor={(_, index) => index}
          // showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (<PopularItem cardItem={item} />)}
        />
      </>
    </View>
  )
}

export default PopularItems