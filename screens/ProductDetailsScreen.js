import { useRoute } from '@react-navigation/native'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import AppText from '../components/AppText'
import { FavouritesIcon_black, MinusIcon, PlusIcon, ReviewStarIcon } from '../components/Icons';
import AppButton from '../components/AppButton';
import { _currencyFormatter } from '../utils/currencyFormatter';
import { urlForImage } from '../api/sanityApi';
import { MEASUREMENTS } from '../config/configUtilities';

const ProductDetailsScreen = () => {
  const route = useRoute();
  const { params: { cardItem: { title, price, ratings, reviews, description, _id, mainImage } } } = route;
  const productImage = urlForImage(mainImage).url();
  const productImageCarousel = [
    {
      id: _id + "01",
      image: productImage,
    },
    {
      id: _id + "02",
      image: productImage,
    },
    {
      id: _id + "03",
      image: productImage,
    },
  ]


  return (
    <View className="bg-red-500">
      <FlatList
        data={productImageCarousel}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Image className="w-full h-64"
              source={{ uri: item.image }}
              alt={title} />
          )
        }
        }
      />
      <View className="bg-white" style={{ paddingHorizontal: MEASUREMENTS.paddingHorizontal }}>
        {/* <FlatList
        data={productImageCarousel}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image style={{ width: "100%", borderRadius: 12, }}
            source={{ uri: item.image }}
            alt={title} />
        )}
      /> */}
        <View className="flex-row justify-between items-end mb-6">
          <View>
            <AppText colorScheme="primary" fontFamily='GelasioMedium' size={22}>{title}</AppText>
            <AppText colorScheme="primary" fontFamily="NunitoSansBold" size={30}>{_currencyFormatter(price)}</AppText>
          </View>
          <View className="flex-row items-center gap-x-6">
            <TouchableOpacity className="w-10 h-10 p-6 rounded-lg bg-[#F0F0F0] justify-center items-center">
              <PlusIcon />
            </TouchableOpacity>
            <View>
              <AppText colorScheme="primary" fontFamily="NunitoSansSemiBold">01</AppText>
            </View>
            <TouchableOpacity className="w-10 h-10 p-6 rounded-lg bg-[#F0F0F0] justify-center items-center">
              <MinusIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row gap-x-6 mb-2">
          <View className="flex-row items-center gap-x-2">
            <ReviewStarIcon />
            <AppText colorScheme="primary">{ratings}</AppText>
          </View>
          <AppText fontFamily="NunitoSansSemiBold">{`(${reviews} reviews)`}</AppText>
        </View>
        <View>
          <AppText colorScheme="headindColorFaint" fontFamily='NunitoSansLight' style={{ lineHeight: 25 }}>{description}</AppText>
        </View>
        <View className="flex-row justify-between">
          <TouchableOpacity className="w-16 h-16 p-6 rounded-lg bg-[#F0F0F0] justify-center items-center">
            <FavouritesIcon_black />
          </TouchableOpacity>
          <AppButton style={{ width: "80%" }}>Add to cart</AppButton>
        </View>
      </View>
    </View>
  )
}

export default ProductDetailsScreen