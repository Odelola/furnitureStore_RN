import { StyleSheet, View, Pressable } from 'react-native'
import AppText from '../AppText'
import { ChevronRightIcon } from '../Icons'

const ProfileSettingsLinks = [
  {
    heading: "My orders",
    info: "Already have 10 orders",
    screenName: "Home"
  },
  {
    heading: "Shipping Addresses",
    info: "03 Addresses",
    screenName: "Home"
  },
  {
    heading: "Payment Method",
    info: "You have 2 cards",
    screenName: "Home"
  },
  {
    heading: "My reviews",
    info: "Reviews for 5 items",
    screenName: "Home"
  },
  {
    heading: "Settings",
    info: "Notification, Password, FAQ, Contact",
    screenName: "Home"
  },
]


const ProfileSettings = () => {
  return (
    <View className="mt-8">
      {ProfileSettingsLinks.map((item, index) => ((
        <Pressable className="flex-row justify-between mb-6 bg-white shadow-2xl px-4 py-4 items-center" style={styles.settingsShadow} key={index}>
          <View className="gap-y-2">
            <AppText colorScheme="headingColorBold" fontFamily="NunitoSansBold" size={20} >{item.heading}</AppText>
            <AppText size={12}>{item.info}</AppText>
          </View>
          <ChevronRightIcon />
        </Pressable>
      )))}
    </View>
  )
}

export default ProfileSettings

const styles = StyleSheet.create({
  settingsShadow: {
    elevation: 6,
    shadowColor: "#8A959E",
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
})