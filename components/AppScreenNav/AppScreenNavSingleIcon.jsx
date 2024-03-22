import { View, Pressable } from 'react-native'
import AppText from "../AppText"
import { ChevronLeftIcon } from "../Icons"
import { useNavigation } from '@react-navigation/native'

const AppScreenNavSingleIcon = ({ screenName, leftIcon = <ChevronLeftIcon />, onPress = null }) => {
    const navigation = useNavigation();
    return (
        <View className="w-full flex-row justify-between items-center mt-6 mb-6 relative">
            <Pressable style={{flexBasis: "38%"  }} onPress={ onPress ? onPress : () => navigation.goBack()}>
                {leftIcon}
            </Pressable>
            <AppText colorScheme="headingColorBold" fontFamily='MerryWeatherBold' size={16} style={{ flexBasis: "62%", }}>{screenName}</AppText>
        </View>
    )
}

export default AppScreenNavSingleIcon