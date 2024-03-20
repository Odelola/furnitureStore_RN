import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Favourites, Notifications, Profile, ProductDetailsScreen } from './screens';
import { HomeIcon, FavouritesIcon, NotificationsIcon, ProfileIcon, HomeIconActive, FavouritesIconActive, NotificationsIconActive_notify, NotificationsIconActive, ProfileIconActive } from "./components/Icons"
import AppStackNavigator from './AppStackNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const AppBottomTab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="ProductDetails" component={ProductDetailsScreen} options={() => ({
        tabBarStyle: {
          display: "none",
        },
        tabBarButton: () => null,
      })} />
    </HomeStack.Navigator>
  )
}

export default function AppBottomTabNavigator() {
  return (
    <AppBottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case "Home":
              return focused ? <HomeIconActive /> : <HomeIcon />
            case "Favourites":
              return focused ? <FavouritesIconActive /> : <FavouritesIcon />
            case "Notifications":
              return focused ? <NotificationsIconActive /> : <NotificationsIcon />
            case "Profile":
              return focused ? <ProfileIconActive /> : <ProfileIcon />
            default:
              break;
          }
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { height: 60 }
      })}>

      <AppBottomTab.Screen name="Home" component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          title: "Home",
        }}
      />
      <AppBottomTab.Screen name="Favourites" component={Favourites}
        options={{
          tabBarLabel: "Favourites",
          title: "Favourites",
        }}
      />
      <AppBottomTab.Screen name="Notifications" component={Notifications}
        options={{
          tabBarLabel: "Notifications",
          title: "Notifications",
        }}
      />
      <AppBottomTab.Screen name="Profile" component={Profile}
        options={{
          tabBarLabel: "Profile",
          title: "Profile",
        }}
      />

    </AppBottomTab.Navigator>
  );
}