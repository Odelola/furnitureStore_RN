import { Suspense } from 'react';
import { View, FlatList } from 'react-native'
import client from "../api/sanityApi"

import AppText from '../components/AppText'
import { HomeSearchIcon, HomeCartIcon, ArmChairIcon } from "../components/Icons"
import Screen from "../components/Screen"
import { BedIcon, ChairIcon, LampIcon, StarIcon, TableIcon } from '../components/Icons';
import { PopularItems } from "../components"
import { COLORS } from '../config/configUtilities';
import { useEffect, useState } from 'react';
import { getPopularFurnitures } from '../api/sanityApi';
import SkeletonLoader from '../components/Loader/SkeletonLoader';

const CategoriesListing = [
  {
    icon: <StarIcon />,
    name: "Popular"
  },
  {
    icon: <ChairIcon />,
    name: "Chair"
  },
  {
    icon: <TableIcon />,
    name: "Table"
  },
  {
    icon: <ArmChairIcon />,
    name: "Arm Chair"
  },
  {
    icon: <BedIcon />,
    name: "Bed"
  },
  {
    icon: <LampIcon />,
    name: "Lamp"
  },
]

const HomeCategories = ({ item }) => (
  <View className="flex items-center gap-2 mb-6">
    <View className="w-[44px] h-[44px] p-6 flex items-center justify-center rounded-lg" style={{ backgroundColor: CategoriesListing.indexOf(item) === 0 ? COLORS.primary : COLORS.diasbaledColor }}>
      {item?.icon}
    </View>
    <AppText size={14} style={CategoriesListing.indexOf(item) === 0 && { fontFamily: "NunitoSansBold" }}>{item?.name}</AppText>
  </View>
);

const Home = () => {
  const [furnituresData, setFurnituresData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    client.fetch('*[_type == "furnitures"]')
      .then((data) => { setLoading(prev => prev = false); setFurnituresData(prev => prev = data) }).catch(console.error)

  }, [])
  const productImageCarousel = [
    {
      id: "_id" + "01",
      image: "https://cdn.sanity.io/images/wvifwibk/production/d5fa2e380bfa4836b0a0b51c21efa5437ff527ed-687x1031.jpg",
    },
    {
      id: "_id" + "02",
      image: "https://cdn.sanity.io/images/wvifwibk/production/d5fa2e380bfa4836b0a0b51c21efa5437ff527ed-687x1031.jpg",
    },
    {
      id: "_id" + "03",
      image: "https://cdn.sanity.io/images/wvifwibk/production/d5fa2e380bfa4836b0a0b51c21efa5437ff527ed-687x1031.jpg",
    },
  ]

  return (
    <Screen>
      <FlatList
        data={[]}
        keyExtractor={() => "key"}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-between items-center mt-6 mb-8">
              <HomeSearchIcon />
              <View>
                <AppText fontFamily="GelasioRegular" style={{ textAlign: 'center' }}>Make home</AppText>
                <AppText colorScheme="primary" fontFamily="GelasioBold" size={22}>BEAUTIFUL</AppText>
              </View>
              <HomeCartIcon />
            </View>

            <FlatList
              bounces={false}
              data={CategoriesListing}
              horizontal
              ItemSeparatorComponent={() => <View className="mr-12"></View>}
              keyExtractor={(item) => item.name}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (<HomeCategories item={item} />)}
            />
            {/* <FlatList
              data={productImageCarousel}
              horizontal
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <Image
                    style={{ width: "100%", height: 200, borderRadius: 12, }}
                    source={{ uri: "https://cdn.sanity.io/images/wvifwibk/production/d5fa2e380bfa4836b0a0b51c21efa5437ff527ed-687x1031.jpg" }}
                    alt="Carousel Image" />
                )
              }
              }
            /> */}
            {loading && <SkeletonLoader />}
            {!loading && <PopularItems data={furnituresData} />}
          </>
        }
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  )
}

export default Home