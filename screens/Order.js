import Screen from '../components/Screen';
import { AppScreenNavSingleNavigator } from '../shared';
import { FlatList } from 'react-native';
import { AppBox, AppText } from "../shared"

const Cart = () => {
    const CartItem = ({ cartItem }) => {
        const { name, price, image } = cartItem
        return (
            <AppBox className="flex-row justify-between mb-4 py-4" style={!lastItemOnTheList ? { borderBottomWidth: 1, borderBottomColor: COLORS.itemBorder } : {}}>
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

    const cartItemsProducts = [
        {
            image: require("../jonny-caspari-wsvCC6UyKjs-unsplash1.jpg"),
            name: "Coffee Table",
            price: 50.00,
        },
    ]

    return (
        <Screen>
            <AppScreenNavSingleNavigator screenName="Cart" />
            <FlatList
                alwaysBounceVertical={false}
                bounces={false} // for ios
                data={cartItemsProducts}
                keyExtractor={(_, index) => index}
                renderItem={({ item }) => { (<CartItem cardItem={item} />) }}
                showsVerticalScrollIndicator={false}
            />
        </Screen>
    )
}

export default Cart;