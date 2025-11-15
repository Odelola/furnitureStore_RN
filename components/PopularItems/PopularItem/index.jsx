import { Dimensions, Image, Pressable } from 'react-native'
import { COLORS } from '../../../config/configUtilities';
import {AppBox, AppText} from '../../../components'
import { WhiteBasketIcon } from '../../Icons';
import { urlForImage } from "../../../api/sanityApi"
import { useNavigation } from '@react-navigation/native';
import { _currencyFormatter } from '../../../utils/currencyFormatter';
import { useRecoilState } from 'recoil';
import { _addToFavourites } from '../../../atoms/addToFavourites';
const { width } = Dimensions.get("window");
export const widthOfItem = width / 2.3;

const PopularItem = ({ cardItem, index }) => {
    const { title, price, mainImage } = cardItem;
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
            <AppBox className="relative">
                <AppBox className="absolute right-2 bottom-2 z-10">
                    <WhiteBasketIcon />
                </AppBox>
                <Image style={{ width: "100%", height: 250, borderRadius: 12, }}
                    //  source={require("../../../jonny-caspari-wsvCC6UyKjs-unsplash1.jpg")}
                    source={{ uri: urlForImage(mainImage).url() }}
                    resizeMode='cover'
                    alt={title} />
            </AppBox>
            <AppBox className="mt-2">
                <AppText style={{ color: COLORS.headingColorFaint, width: "85%" }}>{title}</AppText>
                <AppText fontFamily='NunitoSansBold' size={20} style={{ marginTop: 6, color: COLORS.headingColorBold }}>{_currencyFormatter(price)}</AppText>
            </AppBox>
        </Pressable>
    )
}

export default PopularItem