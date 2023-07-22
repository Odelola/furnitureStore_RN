import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigator from './AppStackNavigator';
import { useFonts } from 'expo-font';
// import { StyleSheet, Text, View } from 'react-native';
import { Boarding  } from "./screens"
import AppBottomTabNavigator from './AppBottomTabNavigator';

export default function App() {
  const [loaded] = useFonts({
    // Gelasio Fonts
    GelasioRegular: require('./config/fonts/gelasio/Gelasio-Regular.ttf'),
    GelasioSemiBold: require('./config/fonts/gelasio/Gelasio-SemiBold.ttf'),
    GelasioBold: require('./config/fonts/gelasio/Gelasio-Bold.ttf'),
    // MerryWeather Fonts
    MerryWeatherBold: require('./config/fonts/merryWeather/Merriweather-Bold.ttf'),
    // Nunito-Sans Fonts
    NunitoSansRegular: require('./config/fonts/nunitoSans/NunitoSans-Regular.ttf'),
    NunitoSansBold: require('./config/fonts/nunitoSans/NunitoSans-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      {/* {!(<Boarding />) && (<AppBottomTabNavigator />)} */}
      {/* <AppStackNavigator /> */}
      <AppBottomTabNavigator />
    </NavigationContainer>
  );
}
