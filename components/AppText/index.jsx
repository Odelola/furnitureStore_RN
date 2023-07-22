import { Text, } from 'react-native'
import { COLORS } from '../../config/configUtilities'

const AppText = ({ colorScheme, size = 18, fontFamily = "NunitoSansRegular", children, style }) => {
    return (
        <Text style={[{
            color: colorScheme ? COLORS[colorScheme] : COLORS.paragraphColor,
            fontSize: size,
            fontFamily: fontFamily,
        }, style]}>{children}</Text>
    )
}

export default AppText
