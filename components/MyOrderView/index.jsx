import {AppButton, AppText, AppBox} from '../../shared'
import { COLORS } from '../../config/configUtilities'
import { _crossPlatformShadow } from '../../utils'

const MyOrderView = () => {
    return (
        <AppBox className="w-full shadow-2xl rounded-md py-4 bg-white" style={{..._crossPlatformShadow()}}>
            <AppBox className="flex-row justify-between items-center border-b-2 border-b-[#F0F0F0] px-4 pb-4">
                <AppText colorScheme="primary" fontFamily="NunitoSansSemiBold">Order No238562312</AppText>
                <AppText>20/03/2020</AppText>
            </AppBox>
            <AppBox className="flex-row justify-between items-center mt-4 mb-6 p-4">
                <AppBox className="flex-row gap-1">
                    <AppText>Quantity:</AppText>
                    <AppText colorScheme="primary" fontFamily="NunitoSansSemiBold">03</AppText>
                </AppBox>
                <AppBox className="flex-row gap-1">
                    <AppText>Total Amount:</AppText>
                    <AppText colorScheme="primary" fontFamily="NunitoSansSemiBold">$150</AppText>
                </AppBox>
            </AppBox>
            <AppBox className="flex-row justify-between items-center pr-4">
                <AppButton fontFamily='NunitoSansRegular' style={{ paddingHorizontal: 30, paddingVertical: 8, borderRadius: 6, borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}>Detail</AppButton>
                <AppText style={{ color: COLORS.success }}>Delivered</AppText>
            </AppBox>
        </AppBox>
    )
}

export default MyOrderView