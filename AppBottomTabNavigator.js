import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppStackNavigator from "./AppStackNavigator"
import { Home, Favourites, Notifications, Profile } from './screens';
import { ChairIcon, HomeIcon, FavouritesIcon, NotificationsIcon, ProfileIcon } from "./components/Icons"

const AppBottomTab = createBottomTabNavigator();

export default function AppBottomTabNavigator() {
  return (
    // <AppBottomTab.Navigator initialRouteName={"Home"}>
    <AppBottomTab.Navigator screenOptions={{
      headerShown: false,
      unmountOnBlur: true,
      tabBarShowLabel: false,
      tabBarStyle: { height: 50 }
    }}>

      <AppBottomTab.Screen name="Home" component={Home}
        options={{
          tabBarLabel: "Home",
          title: "Home",
          tabBarIcon: ({ }) => (
            <HomeIcon />
          )
        }}
      />
      <AppBottomTab.Screen name="Favourites" component={Favourites}
        options={{
          tabBarLabel: "Favourites",
          title: "Favourites",
          tabBarIcon: ({ }) => (
            <FavouritesIcon />
          )
        }}
      />
      <AppBottomTab.Screen name="Notifications" component={Notifications}
        options={{
          tabBarLabel: "Notifications",
          title: "Notofications",
          tabBarIcon: ({ }) => (
            <NotificationsIcon />
          )
        }}
      />
      <AppBottomTab.Screen name="Profile" component={Profile}
        options={{
          tabBarLabel: "Profile",
          title: "Profile",
          tabBarIcon: ({ }) => (
            <ProfileIcon />
          )
        }}
      />
      {/* <AppBottomTab.Screen name="Settings" component={Favourites} /> */}
    </AppBottomTab.Navigator>
    // </>
    // </AppBottomTab.Navigator>
  );
}