import { Dimensions, FlatList, Image, ScrollView, View } from 'react-native'
import { COLORS, MEASUREMENTS } from '../../../config/configUtilities';
import AppText from '../../AppText'
import { BlackBasketIcon, RemoveIcon } from '../../Icons';


const FavouritesItem = ({ cardItem }) => {
    const { name, price, image } = cardItem;
    return (
        <View className="flex-row justify-between border-b mb-4 py-4" style={{ borderBottomColor: COLORS.itemBorder }}>
            <Image source={image} alt="Favourites Item Image" className="w-[100px] h-[100px] rounded-md" resizeMode='cover' />
            <View className="basis-1/2">
                <AppText style={{ color: COLORS.headingColorFaint }}>{name}</AppText>
                <AppText fontFamily='NunitoSansBold' size={20} style={{ marginTop: 6, color: COLORS.headingColorBold }}>{price}</AppText>
            </View>
            <View className="flex items-center justify-between">
                <RemoveIcon />
                <BlackBasketIcon />
            </View>
        </View>
    )
}

export default FavouritesItem