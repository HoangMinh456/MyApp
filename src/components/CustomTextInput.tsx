/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, TextInput } from "react-native"

const CustomTextInput = ({ style, placeholder }: { style?: any, placeholder?: string }) => {
    return (
        <TextInput placeholder={placeholder} style={[style, styles.fontDefault]} />
    );
};

const styles = StyleSheet.create({
    fontDefault: {
        fontFamily: 'Inter-VariableFont_opsz,wght',
    },
});

export default CustomTextInput;