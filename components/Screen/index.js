import { StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native'
import { COLORS, MEASUREMENTS } from '../../config/configUtilities'
import { AppBox } from "../../shared"


const Screen = ({ children }) => {
    return (
        <AppBox style={styles.screen}>
            <SafeAreaView>
                {children}
            </SafeAreaView>
        </AppBox>
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