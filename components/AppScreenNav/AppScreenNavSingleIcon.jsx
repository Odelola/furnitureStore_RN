import { View, StyleSheet, Pressable } from 'react-native'
import AppText from "../AppText"
import { CartIcon, ChevronLeftIcon } from "../Icons"

const AppScreenNavSingleIcon = ({ screenName, leftIcon = <ChevronLeftIcon /> }) => {
    return (
        <View className="w-full flex-row justify-between items-center mt-6 mb-6">
            {!leftIcon ? (<Pressable>
                {leftIcon}
            </Pressable>) : (leftIcon)}
            {/* <AppText colorScheme="headingColorBold" fontFamily='MerryWeatherBold' size={16}>{screenName}</AppText>
            <CartIcon /> */}
            <AppText colorScheme="headingColorBold" fontFamily='MerryWeatherBold' size={16} style={{ flexBasis: "66%" }}>{screenName}</AppText>
        </View>
    )
}

export default AppScreenNavSingleIcon