import { StyleSheet, View, Platform, StatusBar, SafeAreaView } from 'react-native'
import { COLORS, MEASUREMENTS } from '../../config/configUtilities'


const Screen = ({ children }) => {
    return (
        <View style={styles.screen}>
            <SafeAreaView>
                {children}
            </SafeAreaView>
        </View>
    )
}

export default Screen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.textWhite,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
        paddingHorizontal: MEASUREMENTS.paddingHorizontal,
    },
})