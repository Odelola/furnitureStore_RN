import { SafeAreaView, Text, View, FlatList, ScrollView } from 'react-native'
import AppText from '../components/AppText'
import { HomeSearchIcon, HomeCartIcon, ArmChairIcon } from "../components/Icons"
import Screen from "../components/Screen"
import { BedIcon, ChairIcon, LampIcon, StarIcon, TableIcon } from '../components/Icons';
import { PopularItems } from "../components"
import { COLORS } from '../config/configUtilities';


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
    <AppText size={14}>{item?.name}</AppText>
  </View>
);

const Home = () => {
  return (
    <Screen>
      <FlatList
        data={[]}
        keyExtractor={() => "key"}
        // contentContainerStyle={{backgroundColor: "magenta", flex: 1}}
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
            <PopularItems />
          </>
        }
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  )
}

export default Home