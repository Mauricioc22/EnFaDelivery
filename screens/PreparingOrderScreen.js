import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';


const PreparingOrderScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery");
        }, 4000);
    }, []);

    return (
        <SafeAreaView className="bg-white flex-1 justify-center items-center">
        <Animatable.Image
            source={require("../assets/cheems-doggo.gif")}
            animation="slideInUp"
            iterationCount={1}
            className="h-80 w-80 "
        />

        <Animatable.Text
            animation="slideInUp"
            iterationCount={1}
            className="text-lg my-10 font-bold text-center text-[#ff0051]"
        >
            Espere un momento por favor...
        </Animatable.Text>

        <Progress.Bar size={60} indeterminate={true} color="#ff0051"/>
        </SafeAreaView>
    )
}

export default PreparingOrderScreen