import { Text, Pressable} from 'react-native'

const AppButton = ({ size = 18, fontFamily = "NunitoSansBold", children, style, ...props }) => {
    return (
        <Pressable style={[{
            backgroundColor: "#242424",
            padding: 20,
            borderRadius: 8,
        }, style]} {...props}>
            <Text style={[{
                color: "white",
                textAlign: "center",
                fontSize: size,
                fontFamily: fontFamily,
            }]}>{children}</Text>
        </Pressable>
    )
}

export default AppButton
