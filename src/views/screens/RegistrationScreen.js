import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import COLORS from "../../conts/colors";
import Input from "../components/input";

const RegistrationScreen = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{
                backgroundColor: COLORS.white,
                flex: 1
            }}>
            <ScrollView
                contentContainerStyle={{
                    paddingTop: 50,
                    paddingHorizontal: 20,
                }}>
                <Text
                    style={{
                        color: COLORS.black,
                        fontSize: 40,
                        fontWeight: 'bold',
                    }}>
                    Register
                </Text>
                <Text
                    style={{
                        color: COLORS.grey,
                        fontSize: 18,
                        marginVertical: 10,
                    }}>
                    Enter Your Details to Register
                </Text>
                <View style={{ marginVertical: 20 }}>
                    <Input iconName={email-outline} lable='Email' />
                </View>
            </ScrollView>

        </SafeAreaView>
    );
}


export default RegistrationScreen;