import { Pressable } from 'react-native'
import {AppBox, AppText} from "../../components"
import { ChevronLeftIcon } from "../Icons"
import { useNavigation } from '@react-navigation/native'

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

export default AppScreenNavSingleNavigator