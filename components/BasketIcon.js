import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useNavigation } from '@react-navigation/native';

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);

    if(items.length === 0) return null;

    return (
        <View className="absolute bottom-10 w-full z-50">
            <TouchableOpacity 
                onPress={() => navigation.navigate("Basket")}
                className="mx-5 bg-[#ff0051] p-4 rounded-lg flex-row">
                <Text className="text-white font-extrabold text-lg bg-[#ff1f66] py-1 px-2">{items.length}</Text>
                <Text className="flex-1 text-white font-extrabold text-lg text-center">Ver Carro</Text>
                <Text className="text-lg text-white font-extrabold">
                    {'$' + basketTotal.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon