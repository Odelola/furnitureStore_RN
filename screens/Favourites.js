import { Text, View } from "react-native"
import Screen from "../components/Screen"
import AppScreenNav from "../components/AppScreenNav"
import { FavouritesItems } from "../components"
import AppButton from "../components/AppButton"
import { LogoutIcon } from "../components/Icons"

const Favourites = () => {
  return (
    <Screen>
      
      <AppScreenNav screenName="Favourites" />
      <FavouritesItems />
      <AppButton>Add all to my cart</AppButton>
      {/* <View className="mt-[90vh] fixed bottom-0 left-0 z-50"> */}
      {/* </View> */}
    </Screen>
  )
}


export default Favourites