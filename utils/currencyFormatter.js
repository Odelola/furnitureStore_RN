export const _currencyFormatter = (price) => {
    const priceString = String(price);
    const priceStringArray = priceString.split(".");
    return priceStringArray.length == 0 ? `$ ${priceStringArray[0]}.00` : `$ ${parseInt(priceString).toFixed(2)}`
}