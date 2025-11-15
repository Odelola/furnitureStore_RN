import { Platform } from "react-native"

export const _crossPlatformShadow = (shdadowObject) => {
    let styles = {};
    if(Platform.OS === "android" ){
        styles = {
            elevation: shdadowObject?.elevation || 6    ,
            shadowColor: shdadowObject?.androidShadow ||  "#000000"
        }
    }
    if(Platform.OS === "ios"){
        styles = {
            shadowColor: shdadowObject?.iosShadow || "#000000",
            shadowOffset: {width: 4, height: 4},
            shadowOpacity: shdadowObject?.iosShadowOpacity|| 1,
            shadowRadius: shdadowObject?.iosShadowRadius|| 4
        }
    }

    return styles;
}