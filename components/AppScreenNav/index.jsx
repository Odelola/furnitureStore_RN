import { View, StyleSheet } from 'react-native'
import AppText from "../AppText"
import { CartIcon, SearchIcon } from "../Icons"

const AppScreenNav = ({ screenName, rightIcon = <CartIcon /> }) => {
    return (
        <View className="w-full flex-row justify-between items-center mt-6 mb-6">
            <SearchIcon />
            <AppText colorScheme="headingColorBold" fontFamily='MerryWeatherBold' size={16}>{screenName}</AppText>
            {rightIcon}
        </View>
    )
}

export default AppScreenNav