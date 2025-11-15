import { Image, ScrollView } from "react-native"
import Screen from "../../components/Screen"
import AppScreenNav from "../../components/AppScreenNav"
import { AppBox, AppText } from '../../components';

import { LogoutIcon } from "../../components/Icons"
import ProfileSettings from "../../components/ProfileSettings"

const Profile = ({ navigation }) => {
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppScreenNav screenName="Profile" rightIcon={<LogoutIcon />} />
        <AppBox className="flex-row items-center gap-4">
          <Image source={require('../../Profile.jpg')} />
          <AppBox>
            <AppText colorScheme="headingColorBold" fontFamily="NunitoSansBold" size={20} >Bruno Pham</AppText>
            <AppText>bruno203@gmail.com</AppText>
          </AppBox>
        </AppBox>
        <ProfileSettings navigation={navigation} />
      </ScrollView>
    </Screen>
  )
}


export default Profile