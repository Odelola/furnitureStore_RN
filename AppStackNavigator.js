import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppBottomTabNavigator from './AppBottomTabNavigator';
import { Cart } from './screens';

const AppStackNavigator = () => {
    const AppStack = createNativeStackNavigator();
    return (
        <AppStack.Navigator
            screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="AppBottomTabNavigator" component={AppBottomTabNavigator} />
            <AppStack.Screen name="Cart" component={Cart} />
        </AppStack.Navigator>
    )
}

export default AppStackNavigator