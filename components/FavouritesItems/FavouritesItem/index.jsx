import { Image } from 'react-native'
import { COLORS } from '../../../config/configUtilities';
import {AppBox, AppText} from '../../../shared';
import { BlackBasketIcon, RemoveIcon } from '../../Icons';


const FavouritesItem = ({ cardItem, lastItemOnTheList }) => {
    const { name, price, image } = cardItem;
    return (
        <AppBox className="flex-row justify-between mb-4 py-4" style={!lastItemOnTheList ? { borderBottomWidth: 1, borderBottomColor: COLORS.itemBorder } :  {}}>
            <Image source={image} alt="Favourites Item Image" className="w-[100px] h-[100px] rounded-md" resizeMode='cover' />
            <AppBox className="basis-1/2">
                <AppText style={{ color: COLORS.headingColorFaint }}>{name}</AppText>
                <AppText fontFamily='NunitoSansBold' size={20} style={{ marginTop: 6, color: COLORS.headingColorBold }}>{price}</AppText>
            </AppBox>
            <AppBox className="flex items-center justify-between">
                <RemoveIcon />
                <BlackBasketIcon />
            </AppBox>
        </AppBox>
    )
}

export default FavouritesItem