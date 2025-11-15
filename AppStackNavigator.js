import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppBottomTabNavigator from './AppBottomTabNavigator';
import { Cart, Onboarding } from './screens';
import { APP_SCREEN_NAMES } from './constants';

const AppStackNavigator = () => {
    const AppStack = createNativeStackNavigator();
    return (
        <AppStack.Navigator
            screenOptions={{ headerShown: false }}>
            <AppStack.Screen name={APP_SCREEN_NAMES.ONBOARDING} component={Onboarding} />
            <AppStack.Screen name={APP_SCREEN_NAMES['APP-BOTTOM-TAB-NAVIGATOR']} component={AppBottomTabNavigator} />
            <AppStack.Screen name={APP_SCREEN_NAMES.CART} component={Cart} />
        </AppStack.Navigator>
    )
}

export default AppStackNavigator