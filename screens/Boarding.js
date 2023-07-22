import { FlatList, ImageBackground, Text, View } from 'react-native'
import React from 'react'
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import AppBottomTabNavigator from '../AppBottomTabNavigator';
import { COLORS } from '../config/configUtilities';

const Boarding = ({ navigation }) => {
  return (
    <View className="flex-1 ">
      <ImageBackground source={require('../assets/boardingImage.jpg')} alt="Boarding Image" resizeMode="cover" style={{ flex: 1, }}>
        <View className="w-full flex-1 justify-center px-6">
          <AppText colorScheme="headingColorFaint" size={24} fontFamily="GelasioSemiBold">MAKE YOUR</AppText>
          <AppText colorScheme="headingColorBold" size={30} fontFamily="GelasioBold">HOME BEAUTIFUL</AppText>
          <View className="p-12">
            <AppText colorScheme="paragraphColor2" style={{ lineHeight: 30 }}>The best simple place where you discover most wonderful furnitures and make your home beautiful</AppText>
          </View>
          {/* <AppButton fontFamily="GelasioSemiBold" style={{ width: 160, marginHorizontal: "auto", alignSelf: "center" }} onPress={() => { navigation.navigate("Home") }}>Get Started</AppButton> */}
        </View>
      </ImageBackground >
    </View >
  )
}

export default Boarding;