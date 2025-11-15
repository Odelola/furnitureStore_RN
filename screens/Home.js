import { FlatList, Pressable } from 'react-native'
import client from "../api/sanityApi"
import { StatusBar } from "expo-status-bar"
import {AppBox, AppText} from '../shared'
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
  <AppBox className="flex items-center gap-2 mb-6">
    <AppBox className="w-[44px] h-[44px] p-6 flex items-center justify-center rounded-lg" style={{ backgroundColor: CategoriesListing.indexOf(item) === 0 ? COLORS.primary : COLORS.diasbaledColor }}>
      {item?.icon}
    </AppBox>
    <AppText size={14} style={CategoriesListing.indexOf(item) === 0 && { fontFamily: "NunitoSansBold" }}>{item?.name}</AppText>
  </AppBox>
);

const Home = ({ navigation }) => {
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
      <StatusBar backgroundColor='white' />
      <FlatList
        data={[]}
        keyExtractor={() => "key"}
        ListHeaderComponent={
          <>
            <AppBox className="w-full flex-row justify-between items-center mt-6 mb-8">
              <HomeSearchIcon />
              <AppBox>
                <AppText fontFamily="GelasioRegular" style={{ textAlign: 'center' }}>Make home</AppText>
                <AppText colorScheme="primary" fontFamily="GelasioBold" size={22}>BEAUTIFUL</AppText>
              </AppBox>
              <Pressable onPress={() => navigation.navigate("Cart")}>

                <HomeCartIcon />
              </Pressable>
            </AppBox>

            <FlatList
              bounces={false}
              data={CategoriesListing}
              horizontal
              ItemSeparatorComponent={() => <AppBox className="mr-12"></AppBox>}
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
            {loading && <>
              <SkeletonLoader />
              <SkeletonLoader />
            </>
            }
            {!loading && <PopularItems data={furnituresData} />}
          </>
        }
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  )
}

export default Home