import { View, Text, SafeAreaView, Touchable, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { XCircleIcon } from 'react-native-heroicons/outline';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';


const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-[#ff0051] flex-1 mt-10">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <XCircleIcon color={"white"} size={60}></XCircleIcon>
          </TouchableOpacity>
          <Text className="font-bold text-lg text-white">Entregas</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md mt-30 ">
          <View className="items-center">
            <View>
              <Text className="text-m text-gray-400">Tiempo de estimado de Entrega</Text>
              <Text className="text-3xl font-bold">45-55 minutos</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls"
              }}
              className="h-60 w-60"/>

          <Progress.Bar size={30} color="#ff0051" indeterminate={true}></Progress.Bar>
          </View>
          
          <Text className="mt-3 text-gray-500">Tu orden en {restaurant.title} esta siendo enviada</Text>
        </View>

      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen

//3:14:00