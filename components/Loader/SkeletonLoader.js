
import { View, Animated } from "react-native"
import Svg, { Path } from "react-native-svg"
import { widthOfItem } from "../PopularItems/PopularItem"
import { useRef } from "react"
export default SkeleteonLoader = () => {
    const animateOpacity = useRef(new Animated.Value(.5)).current;
// check whether the animate function is still running
    const animateTheOpacity = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animateOpacity, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),

                Animated.timing(animateOpacity, {
                    toValue: 0.75,
                    duration: 1000,
                    useNativeDriver: true
                }),
            ])
        ).start()
    }
    animateTheOpacity();
    return (
        <Animated.View className="flex-row justify-between animate-pulse opacity-10 mb-6" style={{ opacity: animateOpacity }}>
            <View className="flex-row justify-between" style={{ width: widthOfItem }}>
                <View className="space-y-4 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center w-full">
                    <View className="flex items-center justify-center w-full h-48 bg-gray-300 rounded dark:bg-gray-700">
                        <Svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <Path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </Svg>
                    </View>
                    <View className="w-full">
                        <View className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></View>
                        <View className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></View>
                        <View className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></View>
                        <View className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></View>
                        <View className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></View>
                        <View className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></View>
                    </View>
                </View>
            </View>
            <View className="flex-row justify-between" style={{ width: widthOfItem }}>
                <View className="space-y-4 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center w-full">
                    <View className="flex items-center justify-center w-full h-48 bg-gray-300 rounded dark:bg-gray-700">
                        <Svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <Path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </Svg>
                    </View>
                    <View className="w-full">
                        <View className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></View>
                        <View className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></View>
                        <View className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></View>
                        <View className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></View>
                        <View className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></View>
                        <View className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></View>
                    </View>
                </View>
            </View>
        </Animated.View>
    )
}
