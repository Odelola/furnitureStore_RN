import { ImageBackground, View } from 'react-native'
import {AppBox, AppText} from '../shared';

const Boarding = () => {
  return (
    <AppBox className="flex-1 ">
      <ImageBackground source={require('../assets/boardingImage.jpg')} alt="Boarding Image" resizeMode="cover" style={{ flex: 1, }}>
        <AppBox className="w-full flex-1 justify-center px-6">
          <AppText colorScheme="headingColorFaint" size={24} fontFamily="GelasioSemiBold">MAKE YOUR</AppText>
          <AppText colorScheme="headingColorBold" size={30} fontFamily="GelasioBold">HOME BEAUTIFUL</AppText>
          <AppBox className="p-12">
            <AppText colorScheme="paragraphColor2" style={{ lineHeight: 30 }}>The best simple place where you discover most wonderful furnitures and make your home beautiful</AppText>
          </AppBox>
        </AppBox>
      </ImageBackground >
    </AppBox >
  )
}

export default Boarding;