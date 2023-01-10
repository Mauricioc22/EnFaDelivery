import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { selectRestaurant } from '../features/restaurantSlice';
import { selectBasketItems, removeFromBasket, selectBasketTotal } from '../features/basketSlice';

import { SafeAreaView } from 'react-native-safe-area-context';
import { XCircleIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
    
const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();
  const basketTotal = useSelector(selectBasketTotal);

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#ff0051] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Carro de Compras</Text>
            <Text className="text-center text-gray-400">{restaurant.title}</Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5">
              <XCircleIcon color="#ff0051" height={50} width={50}/>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-10 w-10 bg-gray-600 p-4 rounded-full"
          />
          <Text className="flex-1">Entrega en 50 - 75 minutos</Text>
          <TouchableOpacity>
            {/* <Text className="text-[#ff0051]">Cambiar</Text> */}
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View 
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5">
              <Text className="font-bold text-[#ff0051]">{items.length} x</Text>
              <Image
                source={{uri: urlFor(items[0]?.image).url() }}
                className="h-20 w-20 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">{'$' + items[0]?.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>

              <TouchableOpacity>
                <Text
                  className="text-[#ff0051] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key}))}>
                Remover
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">{'$' + basketTotal.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Costo de Envio</Text>
            <Text className="text-gray-400">{'$' + (50).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Total</Text>
            <Text className="text-gray-400">{'$' + (50+basketTotal).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
          </View>

          <TouchableOpacity 
            className="rounded-lg bg-[#ff0051] p-4"
            onPress={() => navigation.navigate("PreparingOrder")}>
            <Text className="text-center text-white text-lg font-bold">Hacer pedido</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen