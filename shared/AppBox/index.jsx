import { View } from 'react-native'

const AppBox = ({ children, ...props }) => {
    return (
        <View {...props}>
            {children}
        </View>
    )
}

export default AppBox
