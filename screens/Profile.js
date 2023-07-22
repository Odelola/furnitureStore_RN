import { View, Image, ScrollView } from "react-native"
import Screen from "../components/Screen"
import sanityClient from '@sanity/client';
import AppScreenNav from "../components/AppScreenNav"
import { FavouritesItems } from "../components"
import AppText from "../components/AppText"
import { LogoutIcon } from "../components/Icons"
import ProfileImage from "../Profile.jpg"
import ProfileSettings from "../components/ProfileSettings"

const Profile = ({ navigation }) => {
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppScreenNav screenName="Profile" rightIcon={<LogoutIcon />} />
        <View className="flex-row items-center gap-4">
          <Image source={require('../Profile.jpg')} />
          <View>
            <AppText colorScheme="headingColorBold" fontFamily="NunitoSansBold" size={20} >Bruno Pham</AppText>
            <AppText>bruno203@gmail.com</AppText>
          </View>
        </View>
        <ProfileSettings navigation={navigation} />
      </ScrollView>
    </Screen>
  )
}


export default Profile