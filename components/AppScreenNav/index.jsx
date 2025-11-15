import {AppBox, AppText} from "../../components"
import { CartIcon, SearchIcon } from "../Icons"

const AppScreenNav = ({ screenName, rightIcon = <CartIcon /> }) => {
    return (
        <AppBox className="w-full flex-row justify-between items-center mt-6 mb-6">
            <SearchIcon />
            <AppText colorScheme="headingColorBold" fontFamily='MerryWeatherBold' size={16}>{screenName}</AppText>
            {rightIcon}
        </AppBox>
    )
}

export default AppScreenNav