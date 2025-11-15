import  {AppBox, AppText} from "../../shared"
import { Pressable } from 'react-native'
import { CartIcon, SearchIcon, ChevronLeftIcon } from "../../components/Icons"
import { useNavigation } from '@react-navigation/native'


const AppScreenNav = ({ screenName, rightIcon = <CartIcon /> }) => {
    return (
        <AppBox className="w-full flex-row justify-between items-center mt-6 mb-6">
            <SearchIcon />
            <AppText colorScheme="headingColorBold" fontFamily='MerryWeatherBold' size={16}>{screenName}</AppText>
            {rightIcon}
        </AppBox>
    )
}

const AppScreenNavSingleNavigator = ({ screenName, leftIcon = <ChevronLeftIcon />, onPress = null }) => {
    const navigation = useNavigation();
    return (
        <AppBox className="w-full flex-row justify-between items-center mt-6 mb-6 relative">
            <Pressable style={{flexBasis: "38%"  }} onPress={ onPress ? onPress : () => navigation.goBack()}>
                {leftIcon}
            </Pressable>
            <AppText colorScheme="headingColorBold" fontFamily='MerryWeatherBold' size={16} style={{ flexBasis: "62%", }}>{screenName}</AppText>
        </AppBox>
    )
}

const AppScreenNavSingleIcon = ({ screenName, leftIcon = <ChevronLeftIcon />, onPress = null }) => {
    const navigation = useNavigation();
    return (
        <AppBox className="w-full flex-row justify-between items-center mt-6 mb-6 relative">
            <Pressable style={{flexBasis: "38%"  }} onPress={ onPress ? onPress : () => navigation.goBack()}>
                {leftIcon}
            </Pressable>
            <AppText colorScheme="headingColorBold" fontFamily='MerryWeatherBold' size={16} style={{ flexBasis: "62%", }}>{screenName}</AppText>
        </AppBox>
    )
}

export { AppScreenNav, AppScreenNavSingleNavigator, AppScreenNavSingleIcon}