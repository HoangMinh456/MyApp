import { Dimensions, Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, useColorScheme, View } from "react-native";
import useNotifi from "../hooks/useNotifi";
import { Colors } from "react-native/Libraries/NewAppScreen";
import FastImage from "react-native-fast-image";
import CustomText from "../components/CustomText";
import CustomTextInput from "../components/CustomTextInput";
import CustomColors from "../../colors";

const { width, height } = Dimensions.get('window');

export default function SignUpScreen() {
    const isDarkMode = useColorScheme() === 'dark';
    const { hidden, loading, notifi } = useNotifi();
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        // display: 'flex',
        // flex: 1,
    };
    const safeAreaStyle = () => ({
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        display: 'flex' as const,
        flex: 1,
    });
    // console.log('re-render');
    return (
        <SafeAreaView style={safeAreaStyle()}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ImageBackground style={styles.image} source={require('../assets/background.jpg')} resizeMode="cover" >
                <FastImage style={styles.fastImage} source={Image.resolveAssetSource(require('../assets/logo.png'))} resizeMode="center" />
                <View style={styles.viewForm}>
                    <CustomText style={styles.title}>Đăng nhập</CustomText>
                    <View className='flex flex-col gap-y-8'>
                        <View>
                            <CustomTextInput style={styles.textInput} placeholder="Nhập số điện thoại" />
                            <CustomTextInput style={styles.textInput} placeholder="Nhập mật khẩu" />
                            <TouchableOpacity onPress={() => { console.log('action'); notifi('Thông báo của thông báo'); }}>
                                <CustomText style={styles.forgotPass}>Quên mật khẩu?</CustomText>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewProviderButton}>
                            <TouchableOpacity onPress={() => loading()} style={styles.viewButton}>
                                <CustomText style={styles.textButtonWhite}>Đăng nhập</CustomText>
                            </TouchableOpacity>
                            <CustomText className='text-center'>Hoặc</CustomText>
                            <TouchableOpacity onPress={() => hidden()} style={styles.viewBorderPrimary}>
                                <CustomText style={styles.textButtonPrimary}>Đăng ký</CustomText>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    forgotPass: {
        color: '#1875AF',
        fontSize: 14,
        textAlign: 'right',
        flexGrow: 1,
        marginTop: -12,
    },
    title: {
        fontSize: 20,
        lineHeight: 28,
        color: '#000',
        fontWeight: '700',
        textTransform: 'uppercase',
        textAlign: 'center',
        paddingVertical: 4,
        marginBottom: 16,
    },
    viewProviderButton: {
        display: 'flex',
        rowGap: 8,
    },
    textButtonPrimary: {
        color: CustomColors.primary,
        fontSize: 15,
        fontWeight: '400',
    },
    textButtonWhite: {
        color: '#EEEEEE',
        fontSize: 15,
        fontWeight: '400',
    },
    viewBorderPrimary: {
        borderWidth: 1,
        borderColor: CustomColors.primary,
        height: 45,
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewButton: {
        borderWidth: 1,
        borderColor: CustomColors.primary,
        height: 45,
        borderRadius: 9999,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: CustomColors.primary,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
        borderRadius: 9999,
        fontSize: 14,
        textAlign: 'center',
        height: 45,
        marginBottom: 16,
    },
    viewForm: {
        // position: 'absolute',
        width: width * 90 / 100,
        // top: height / 2,
        // transform: [{ translateY: -(height * 23 / 100) }],
        // alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 10,
        paddingHorizontal: 24,
        paddingVertical: 24,
        rowGap: 16,
    },
    fastImage: {
        width: 258,
        height: 90,
        position: 'absolute',
        alignSelf: 'center',
        top: height / 7,
    },
    image: {
        width: width,
        height: height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});