import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot, } from 'recoil';
import { useFonts } from 'expo-font';
import AppBottomTabNavigator from './AppBottomTabNavigator';
import AppStackNavigator from './AppStackNavigator';

export default function App() {
  const [loaded] = useFonts({
    // Gelasio Fonts
    GelasioMedium: require('./config/fonts/gelasio/Gelasio-Medium.ttf'),
    GelasioRegular: require('./config/fonts/gelasio/Gelasio-Regular.ttf'),
    GelasioSemiBold: require('./config/fonts/gelasio/Gelasio-SemiBold.ttf'),
    GelasioBold: require('./config/fonts/gelasio/Gelasio-Bold.ttf'),
    // MerryWeather Fonts
    MerryWeatherBold: require('./config/fonts/merryWeather/Merriweather-Bold.ttf'),
    // Nunito-Sans Fonts
    NunitoSansLight: require('./config/fonts/nunitoSans/NunitoSans-Light.ttf'),
    NunitoSansRegular: require('./config/fonts/nunitoSans/NunitoSans-Regular.ttf'),
    NunitoSansSemiBold: require('./config/fonts/nunitoSans/NunitoSans-SemiBold.ttf'),
    NunitoSansBold: require('./config/fonts/nunitoSans/NunitoSans-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <RecoilRoot>
      <NavigationContainer>
        <AppStackNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
}
