import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../../conts/colors";
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const Input = ({
    lable,
    iconName,
    error,
    password,
    onFocus = () => { },
    ...prop
}) => {
    return (
        <View style={{ marginBottom: 20 }}>
            <Text style={style.lable}>
                {lable}
            </Text>
            <View style={style.inputContainer}>
                <MIcon name={iconName}
                    style={{
                        fontSize: 22,
                        color: COLORS.darkBlue,
                        marginRight: 10
                    }} />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    lable: {
        marginVertical: 5,
        color: COLORS.grey,
        fontSize: 14,
    },
    inputContainer: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: COLORS.grey,
        paddingHorizontal: 15,
        borderWidth: 0.5,
        alignItems: 'center',
    }
})

export default Input;