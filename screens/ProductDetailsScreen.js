import { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, TouchableOpacity, View, Dimensions, Pressable } from 'react-native'
import { StatusBar } from "expo-status-bar"
import { useNavigation, useRoute } from '@react-navigation/native'
import AppText from '../components/AppText'
import { FavouritesIcon_black, MinusIcon, PlusIcon, ReviewStarIcon, ChevronLeftIcon } from '../components/Icons';
import AppButton from '../components/AppButton';
import { _currencyFormatter } from '../utils/currencyFormatter';
import { urlForImage } from '../api/sanityApi';
import { COLORS, MEASUREMENTS } from '../config/configUtilities';
import Screen from '../components/Screen';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const ProductDetailsScreen = () => {
  const navigation = useNavigation();
  const [bottomTabHeight] = useState(useBottomTabBarHeight());
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none"
      }
    });
    return () => navigation.getParent()?.setOptions({
      tabBarStyle: undefined
    });
  }, [navigation]);

  const route = useRoute();
  console.log(bottomTabHeight)
  const { width, height } = Dimensions.get("screen");
  const WIDTHOFPRODUCT = width / 1.25;
  const HEIGHTOFPRODUCT = height / 1.75;
  console.log(bottomTabHeight);
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
  const CustomGoBackButton = () => {
    return (
      <View className="absolute w-12 h-12 rounded-lg -left-6 bg-white items-center justify-center shadow-lg z-10" style={{ top: MEASUREMENTS.paddingTop }}>
        <ChevronLeftIcon />
      </View>
    )
  }
  const ProductColorSwitcher = () => {
    return (
      <View className="absolute w-16 bg-white shadow-2xl -left-8 z-10 justify-evenly rounded-full items-center" style={{ height: HEIGHTOFPRODUCT / 2, transform: [{ translateY: (HEIGHTOFPRODUCT / 3) }] }}>
        <Pressable>
          <View className="bg-white w-10 h-10 rounded-full border-4 border-[#909090]">
          </View>
        </Pressable>
        <Pressable>
          <View className="bg-[#B4916C] w-10 h-10 rounded-full border-4 border-[#F0F0F0]">
          </View>
        </Pressable>
        <Pressable>
          <View className="bg-[#E4CBAD] w-10 h-10 rounded-full border-4 border-[#F0F0F0]">
          </View>
        </Pressable>
      </View>
    )
  }
  const ScrollIndicators = () => {
    return (
      <View className="absolute bottom-8 right-8 z-10 justify-between rounded-full flex-row" style={{ width: WIDTHOFPRODUCT / 2.5 }}>

        {productImageCarousel.map((item, index) => (
          <View className="rounded-full" style={{ backgroundColor: COLORS.headingColorBold, width: 35, height: 6 }} key={item + index}>
          </View>
        ))}
      </View>
    )
  }
  const SectorCutOutFromSquareAsBorderRadiusDebugMethod = () => {
    return (
      <View className="absolute bottom-0 left-0 z-10 bg-white">
        <View className="bg-transparent" style={{ width: 40, height: 40, borderTopRightRadius: 40, borderBottomRightRadius: 400, transform: [{ rotate: '90deg' }] }}>
        </View>
      </View>
    )
  }

  return (
    <View className="flex-1 relative bg-white">
      <ScrollView className="flex-1">
        <View style={{ paddingBottom: (bottomTabHeight * 2) }}>
          <StatusBar backgroundColor='transparent' />
          <View className="relative w-full" style={{ height: HEIGHTOFPRODUCT, }}>
            <View className=" bg-red-500" style={{ marginLeft: (width - WIDTHOFPRODUCT), width: WIDTHOFPRODUCT, borderBottomLeftRadius: 50, }}>
              {/*  borderBottomLeftRadius: 50, borderBottomRightRadius: 50 */}
              <CustomGoBackButton />
              <ProductColorSwitcher />
              <ScrollIndicators />
              <SectorCutOutFromSquareAsBorderRadiusDebugMethod />
              <FlatList
                data={productImageCarousel}
                contentContainerStyle={{ borderBottomLeftRadius: 50, background: "magenta", }}
                horizontal
                snapToInterval={WIDTHOFPRODUCT}
                showsHorizontalScrollIndicator={false}
                decelerationRate="fast"
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return (
                    <View>
                      <Image
                        className="rounded-b-sm"
                        source={{ uri: item.image }}
                        style={{ width: WIDTHOFPRODUCT, height: HEIGHTOFPRODUCT, }}
                        resizeMode='contain'
                        alt={title} />
                    </View>
                  )
                }
                }
              />
              {/* borderBottomLeftRadius: 40, */}
            </View>
          </View>
          <View className="mt-8" style={{ paddingHorizontal: MEASUREMENTS.paddingHorizontal }}>
            <View className="flex-row justify-between items-end mb-6 w-full">
              <View>
                <AppText colorScheme="primary" fontFamily='GelasioMedium' size={22} style={{ marginBottom: 10 }}>{title}</AppText>
                <AppText colorScheme="primary" fontFamily="NunitoSansBold" size={30}>{_currencyFormatter(price)}</AppText>
              </View>
              <View className="flex-row items-center gap-x-4">
                <TouchableOpacity className="w-9 h-9 rounded-lg bg-[#E0E0E0] justify-center items-center">
                  <PlusIcon />
                </TouchableOpacity>
                <View>
                  <AppText colorScheme="primary" fontFamily="NunitoSansSemiBold" size={14}>01</AppText>
                </View>
                <TouchableOpacity className="w-9 h-9 rounded-lg bg-[#E0E0E0] justify-center items-center">
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
          </View>
        </View>
      </ScrollView>
      <View className="self-center flex-row w-[90%] absolute justify-between items-center z-40 pt-12" style={{ bottom: bottomTabHeight / 2 }}>
        <TouchableOpacity className="w-16 h-16 p-6 rounded-lg bg-[#F0F0F0] justify-center items-center">
          <FavouritesIcon_black />
        </TouchableOpacity>
        <AppButton style={{ flexBasis: "75%" }}>Add to cart</AppButton>
      </View>
    </View>
  )
}

export default ProductDetailsScreen