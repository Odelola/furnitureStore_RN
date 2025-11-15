import { Image } from "react-native"
import Screen from "../components/Screen"
import AppScreenNavSingleNavigator from "../components/AppScreenNav/AppScreenNavSingleNavigator"
import { AppBox, AppText } from '../components';

import { SearchIcon } from "../components/Icons"

const Notifications = () => {
  return (
    <Screen>
      <AppScreenNavSingleNavigator screenName="Notification" leftIcon={<SearchIcon />} />
      <AppBox className="flex-row gap-x-4">
        <Image source={require("../jonny-caspari-wsvCC6UyKjs-unsplash1.jpg")} className="w-[60px] h-[60px] rounded-md" />
        <AppBox className="flex-1">
          <AppText colorScheme="headingColorBold" fontFamily="NunitoSansBold">Your order #123456789 has been canceled</AppText>
          <AppText size={14}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. </AppText>
        </AppBox>
      </AppBox>
    </Screen>
  )
}


export default Notifications