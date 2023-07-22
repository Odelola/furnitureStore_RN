import { Text, TouchableOpacity } from 'react-native'

const AppButton = ({ size = 18, fontFamily = "NunitoSansRegular", children, onPress, style, }) => {
    return (
        <TouchableOpacity style={[{
            backgroundColor: "#242424",
            padding: 20,
            borderRadius: 4,
        }, style]}
        onPress={onPress}>
            <Text style={[{
                color: "white",
                textAlign: "center",
                fontSize: size,
                fontFamily: fontFamily,
            }]}>{children}</Text>
        </TouchableOpacity>
    )
}

export default AppButton
