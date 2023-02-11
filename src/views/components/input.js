import React from "react";
import { useState } from 'react';
import COLORS from "../../conts/colors";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from "react-native/Libraries/NewAppScreen";



const Input = ({
    lable,
    iconName,
    error,
    password,
    onFocus = () => { },
    ...props
}) => {
    const [isFocus, setIsFocus] = useState(false);
    return (
        <View style={{ marginBottom: 20 }}>
            <Text style={style.lable}>
                {lable}
            </Text>
            <View style={[style.inputContainer,
            {
                borderColor: error
                    ? COLORS.red
                    : isFocus
                        ? COLORS.darkBlue
                        : COLORS.light,
            }
            ]}>
                <Icon
                    name={iconName}
                    style={{
                        fontSize: 28,
                        color: COLORS.darkBlue,
                        marginRight: 10
                    }} />
                <TextInput
                    style={{
                        color: COLORS.darkBlue,
                        flex: 1
                    }}
                    autoCorrect={false}
                    onFocus={() => {
                        onFocus();
                        setIsFocus(true);
                    }}
                    onBlur={() => {
                        setIsFocus(false);
                    }}
                    {...props} />
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
        backgroundColor: COLORS.light,
        paddingHorizontal: 15,
        borderWidth: 0.5,
        alignItems: 'center',
    }
})

export default Input;