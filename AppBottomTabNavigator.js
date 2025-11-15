import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Favourites, Notifications, Profile, ProductDetailsScreen, MyOrders, ShippingAddress, PaymentMethod, MyReviews, Settings } from './screens';
import { HomeIcon, FavouritesIcon, NotificationsIcon, ProfileIcon, HomeIconActive, FavouritesIconActive, NotificationsIconActive_notify, NotificationsIconActive, ProfileIconActive } from "./components/Icons"
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const AppBottomTab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

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

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <ProfileStack.Screen name='Profile' component={Profile} />
      <ProfileStack.Screen name='My Orders' component={MyOrders} />
      <ProfileStack.Screen name='Shipping Address' component={ShippingAddress} />
      <ProfileStack.Screen name='Payment Method' component={PaymentMethod} />
      <ProfileStack.Screen name='My Reviews' component={MyReviews} />
      <ProfileStack.Screen name='Settings' component={Settings} />
    </ProfileStack.Navigator>
  )
}

export default function AppBottomTabNavigator() {
  return (
    <AppBottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case "HomeStackScreen":
              return focused ? <HomeIconActive /> : <HomeIcon />
            case "Favourites":
              return focused ? <FavouritesIconActive /> : <FavouritesIcon />
            case "Notifications":
              return focused ? <NotificationsIconActive /> : <NotificationsIcon />
            case "ProfileStackScreen":
              return focused ? <ProfileIconActive /> : <ProfileIcon />
            default:
              break;
          }
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowColor: "red",
          shadowRadius: 16.0,
          elevation: 24,
        }
      })}>

      <AppBottomTab.Screen name="HomeStackScreen" component={HomeStackScreen}
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
      <AppBottomTab.Screen name="ProfileStackScreen" component={ProfileStackScreen}
        options={{
          tabBarLabel: "Profile",
          title: "Profile",
        }}
      />

    </AppBottomTab.Navigator>
  );
}