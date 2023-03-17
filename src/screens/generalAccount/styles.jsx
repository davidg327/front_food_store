import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container: {
        width: wp('90%'),
        alignSelf: 'center',
        marginTop: hp(5),
    },
    title: {
        fontSize: wp(5),
    },
    textTitleInput: {
        marginTop: hp(3),
    },
    textDate: {
        fontSize: wp(4),
    },
    input: {
        width: wp('90%'),
        padding: wp(5),
        borderWidth: wp(0.15),
        marginTop: hp(1),
        borderRadius: wp(4),
    },
});

export default styles;
