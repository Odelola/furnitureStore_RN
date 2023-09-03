import { Dimensions, Image, View, Pressable } from 'react-native'
import { COLORS } from '../../../config/configUtilities';
import AppText from '../../AppText'
import { WhiteBasketIcon } from '../../Icons';
import { urlForImage } from "../../../api/sanityApi"
import { useNavigation } from '@react-navigation/native';
import { _currencyFormatter } from '../../../utils/currencyFormatter';
import { useRecoilState, useRecoilValue } from 'recoil';
import { _addToFavourites } from '../../../atoms/addToFavourites';

const PopularItem = ({ cardItem, index }) => {
    const { width } = Dimensions.get("window");
    const { title, price, mainImage } = cardItem;
    const widthOfItem = width / 2.3;
    const navigation = useNavigation();
    const [addToFavourites, setAddToFavourites] = useRecoilState(_addToFavourites);
    const _goToDetailsScreen = () => {
        setAddToFavourites(prev => [...prev, {
            id: "2"
        }])
        console.log(addToFavourites)
        navigation.navigate("ProductDetails", { cardItem })
    }
    return (
        <Pressable onPress={() => _goToDetailsScreen()} style={[
            (index % 2 == 0 && { marginRight: (width / 2 - widthOfItem) }),
            { width: widthOfItem, marginBottom: 15, }]
        }>
            <View className="relative">

                <View className="absolute right-2 bottom-2 z-10">
                    <WhiteBasketIcon />
                </View>
                <Image style={{ width: "100%", height: 200, borderRadius: 12, }}
                    //  source={require("../../../jonny-caspari-wsvCC6UyKjs-unsplash1.jpg")}
                    source={{ uri: urlForImage(mainImage).url() }}
                    alt={title} />
            </View>
            <View className="mt-2">
                <AppText style={{ color: COLORS.headingColorFaint, width: "85%" }}>{title}</AppText>
                <AppText fontFamily='NunitoSansBold' size={20} style={{ marginTop: 6, color: COLORS.headingColorBold }}>{_currencyFormatter(price)}</AppText>
            </View>
        </Pressable>
    )
}

export default PopularItem