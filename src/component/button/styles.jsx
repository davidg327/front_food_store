import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

const styles = StyleSheet.create({
    containerButton: {
        alignSelf: 'center',
        marginTop: hp(3),
        backgroundColor: '#3c9bec',
        paddingHorizontal: wp('20%'),
        paddingVertical: hp('2%'),
        borderRadius: wp(4),
        marginBottom: hp(4),
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: wp(4),
    },
});

export default styles;
