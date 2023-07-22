import { Dimensions, FlatList, Image, ScrollView, View } from 'react-native'
import { COLORS, MEASUREMENTS } from '../../../config/configUtilities';
import AppText from '../../AppText'


const PopularItem = ({ cardItem  }) => {
    const { width } = Dimensions.get("window");  
    const { name, price, image } = cardItem;
    // console.log(image, "mallam");
    return (
        // <ScrollView>
            <View style={{ width: width / 2.3, marginBottom: 15, 
            // marginLeft: 10
             }}>
                {/* <Image style={{ width: (width / 2) - (MEASUREMENTS.paddingHorizontal), height: 200, objectFit: "cover", borderRadius: 24 }} source={image} alt="Popular Item Image"  className="hidden" /> */}
                {/* <Image style={{ flexBasis: "50%", height: 200, objectFit: "cover", borderRadius: 24 }} source={image} alt="Popular Item Image"  className="hidden" /> */}
                <Image style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 24 }} source={image} alt="Popular Item Image" className="hidden" />
                <View>
                    <AppText style={{ color: COLORS.headingColorFaint }}>{name}</AppText>
                    <AppText fontFamily='NunitoSansBold' size={20} style={{ marginTop: 6, color: COLORS.headingColorBold }}>{price}</AppText>
                </View>
            </View>
        // </ScrollView>
    )
}

export default PopularItem