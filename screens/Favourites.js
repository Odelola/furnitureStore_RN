import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
import Screen from "../components/Screen"
import { AppScreenNav } from "../shared"
import { FavouritesItems } from "../components"
import { AppButton } from "../shared"

const Favourites = () => {
  const bottomTabHeight = useBottomTabBarHeight();
  return (
    <Screen>
      <AppScreenNav screenName="Favourites" />
      <FavouritesItems bottomTabHeight={bottomTabHeight} />
      <AppButton size={20} style={{ position: 'absolute', zIndex: 10, width: '100%', left: 0, bottom: bottomTabHeight * 2, padding: 14 }}>Add all to my cart</AppButton>
    </Screen>
  )
}


export default Favourites