import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Boarding, Home, Favourites } from "./screens"

const AppStackNavigator = () => {

    const AppStack = createNativeStackNavigator();

    return (
        <AppStack.Navigator
            screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Boarding" component={Boarding} />
            <AppStack.Screen name="Favourites" component={Favourites} />
            <AppStack.Screen name="Home" component={Home} />
            {/* <AppStack.Screen name="Cart" component={Cart} /> */}
        </AppStack.Navigator>
    )
}

export default AppStackNavigator