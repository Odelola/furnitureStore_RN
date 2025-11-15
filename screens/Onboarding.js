import { ImageBackground } from 'react-native'
import { AppText, AppBox, AppButton } from '../components';
import { APP_SCREEN_NAMES } from '../constants';


const Onboarding = ({ navigation }) => {

  return (
    <AppBox className="flex-1 ">
      <ImageBackground source={require('../assets/boardingImage.jpg')} alt="Boarding Image" resizeMode="cover" className="flex-1 justify-center items-center">
        <AppBox className="h-[65%]">
          <AppBox className="w-full flex-1 justify-center px-6">
            <AppText colorScheme="headingColorFaint" size={24} fontFamily="GelasioSemiBold">MAKE YOUR</AppText>
            <AppText colorScheme="headingColorBold" size={30} fontFamily="GelasioBold">HOME BEAUTIFUL</AppText>
            <AppBox className="p-12">
              <AppText colorScheme="paragraphColor2" style={{ lineHeight: 30 }}>The best simple place where you discover most wonderful furnitures and make your home beautiful</AppText>
            </AppBox>
          </AppBox>
          <AppBox className="w-1/2 self-center">
            <AppButton onPress={() => navigation.navigate(APP_SCREEN_NAMES['APP-BOTTOM-TAB-NAVIGATOR'])}>
              Get Started
            </AppButton>
          </AppBox>
        </AppBox>
      </ImageBackground >
    </AppBox >
  )
}

export default Onboarding;