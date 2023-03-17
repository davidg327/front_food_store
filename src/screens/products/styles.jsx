import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    flatList: {
        width: wp('95%'),
        alignSelf: 'center',
        backgroundColor: 'white',
    },
    contentContainer: {
        paddingBottom: hp(10),
    },
    containerCard: {
        width: wp('45%'),
        marginTop: 20,
        borderRadius: wp('4%'),
    },
    containerProduct: {
        width: wp('45%'),
        height: hp('25%'),
        resizeMode: 'contain',
    },
    border: {
        borderRadius: wp('4%'),
    },
    gradient: {
        flex: 1,
        alignItems: 'center',
        //borderRadius: wp(3),
    },
    title: {
        color: 'white',
        position: 'absolute',
        bottom: 0,
        left: wp(5),
        fontSize: wp(4),
        marginBottom: hp(2),
        width: wp('35%'),
        fontWeight: 'bold',
    },
});

export default styles;
