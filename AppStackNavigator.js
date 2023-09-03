import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Boarding, Home, Favourites, ProductDetailsScreen } from "./screens"
import AppBottomTabNavigator from './AppBottomTabNavigator';

const AppStackNavigator = () => {

    const AppStack = createNativeStackNavigator();

    return (
        <AppStack.Navigator
            screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="AppBottomTabNavigator" component={AppBottomTabNavigator} />
            <AppStack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        </AppStack.Navigator>
    )
}

export default AppStackNavigator