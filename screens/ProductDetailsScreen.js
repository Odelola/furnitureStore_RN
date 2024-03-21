import { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, FlatList, Image, ScrollView, TouchableOpacity, View, Dimensions, Pressable, Animated, } from 'react-native'
import { StatusBar } from "expo-status-bar"
import { useNavigation, useRoute } from '@react-navigation/native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import AppText from '../components/AppText'
import { FavouritesIcon_black, MinusIcon, PlusIcon, ReviewStarIcon, ChevronLeftIcon } from '../components/Icons';
import AppButton from '../components/AppButton';
import { _currencyFormatter, _hexToRgba} from '../utils';
import { urlForImage } from '../api/sanityApi';
import { COLORS, MEASUREMENTS } from '../config/configUtilities';

const ProductDetailsScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
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

  const pressableRef = useRef();
  const _pressCarouselColorButton = useCallback(itemIndex => {
    pressableRef?.current?.scrollToOffset({
      offset: itemIndex * WIDTHOFPRODUCT
    })
  })
  const route = useRoute();
  const productCarouselColors = ["#FFFFFF", "#B4916C", "#E4CBAD"];
  const { width, height } = Dimensions.get("screen");
  const WIDTHOFPRODUCT = width / 1.25;
  const HEIGHTOFPRODUCT = height / 1.75;
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
      <Pressable className="absolute rounded-lg left-0 bg-white items-center justify-center shadow-lg z-10" style={{ top: MEASUREMENTS.paddingTop, width: 40, height: 40, left: (width - WIDTHOFPRODUCT) - 20, }} onPress={() => navigation.goBack()}>
        <ChevronLeftIcon />
      </Pressable>
    )
  }
  const ProductColorSwitcher = () => {
    return (
      <View className="absolute w-16 bg-white shadow-2xl -left-8 z-50 justify-evenly rounded-full items-center" style={{ height: HEIGHTOFPRODUCT / 2, transform: [{ translateY: (HEIGHTOFPRODUCT / 3) }] }}>
        {productCarouselColors.map((item, index) => {
          const inputRange = [(index - 1) * WIDTHOFPRODUCT, (index) * WIDTHOFPRODUCT, (index + 1) * WIDTHOFPRODUCT];

          const borderColorChange = scrollX.interpolate({
            inputRange,
            outputRange: [COLORS.itemBorder, COLORS.paragraphColor, COLORS.itemBorder],
            extrapolate: 'clamp'
          })
          return (
            <Pressable key={`indicator-${index}`} onPress={() => _pressCarouselColorButton(index)}>
              <Animated.View className="w-10 h-10 rounded-full border-4" style={{ backgroundColor: item, borderColor: borderColorChange }}>
              </Animated.View>
            </Pressable>
          )
        })}
      </View >
    )
  }
  const ScrollIndicators = () => {
    const scrollIndicatorsWidth = WIDTHOFPRODUCT / 2.5;
    const scrollIndicatorsStyle = { width: scrollIndicatorsWidth, }
    const scrollIndicatorStyle = { backgroundColor: COLORS.headingColorBold, width: scrollIndicatorsWidth / 4, height: 6 }
    return (
      <View className="absolute bottom-8 right-8 z-10 justify-between rounded-full flex-row" style={scrollIndicatorsStyle}>
        {productImageCarousel.map((_, index) => {
          const inputRange = [(index - 1) * WIDTHOFPRODUCT, index * WIDTHOFPRODUCT, (index + 1) * WIDTHOFPRODUCT];
          const widthChange = scrollX.interpolate({
            inputRange,
            outputRange: [scrollIndicatorStyle.width, scrollIndicatorsWidth / 3, scrollIndicatorStyle.width],
            extrapolate: 'clamp'
          });
          const colorChange = scrollX.interpolate({
            inputRange,
            outputRange: [COLORS.itemBorder, COLORS.headingColorBold, COLORS.itemBorder],
            extrapolate: 'clamp'
          });
          return (
            <Animated.View key={`color-${index}`} className="rounded-full" style={[scrollIndicatorStyle, { width: widthChange, backgroundColor: colorChange }]}>
            </Animated.View>
          )
        })}
      </View>
    )
  }
  const SectorCutOutFromSquareAsBorderRadiusDebugMethod = () => {
    return (
      <View className="absolute bottom-0 left-0 z-40 bg-white">
        <View className="bg-transparent" style={{ width: 40, height: 40, borderTopRightRadius: 40, borderBottomRightRadius: 400, transform: [{ rotate: '90deg' }] }}>
        </View>
      </View>
    )
  }

  const AddToFavouritesOrCartButtons = () => (
    <View className="self-center flex-row w-[90%] absolute justify-between items-center z-40 pt-12" style={{ bottom: bottomTabHeight / 2 }}>
      <TouchableOpacity className="w-16 h-16 p-6 rounded-lg bg-[#F0F0F0] justify-center items-center">
        <FavouritesIcon_black />
      </TouchableOpacity>
      <AppButton style={{ flexBasis: "75%" }}>Add to cart</AppButton>
    </View>
  )

  return (
    <View className="flex-1 relative bg-white">
      <CustomGoBackButton />
      <ScrollView className="flex-1">
        <View style={{ paddingBottom: (bottomTabHeight * 2) }}>
          <StatusBar backgroundColor='transparent' />
          <View className="relative w-full">
          </View>
            <View className="relative" style={{ marginLeft: (width - WIDTHOFPRODUCT), width: WIDTHOFPRODUCT, height: HEIGHTOFPRODUCT, borderTopLeftRadius: 50, }}>
              <ProductColorSwitcher />
              <ScrollIndicators />
              {/* <SectorCutOutFromSquareAsBorderRadiusDebugMethod /> */}
              <Animated.FlatList
                data={productImageCarousel}
                ref={pressableRef}
                contentContainerStyle={{ background: "magenta", position: "relative" }}
                horizontal
                snapToInterval={WIDTHOFPRODUCT}
                showsHorizontalScrollIndicator={false}
                bounces={false} //for ios
                pagingEnabled
                decelerationRate="fast"
                keyExtractor={(item) => item.id}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
                renderItem={({ item, index }) => {
                  const isColorWhite = productCarouselColors[index].toLowerCase().endsWith("fff")
                  return (
                    <View className="relative">
                      <View style={[StyleSheet.absoluteFillObject, { backgroundColor: !isColorWhite ? _hexToRgba(productCarouselColors[index], .5) : "none", zIndex: 30}]} />
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
            </View>
          <View className="mt-8" style={{ paddingHorizontal: MEASUREMENTS.paddingHorizontal }}>
            <View className="flex-row justify-between items-end mb-4 w-full">
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
      <AddToFavouritesOrCartButtons />
    </View>
  )
}

export default ProductDetailsScreen