import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { View, Text, Image, SafeAreaView, StatusBar, TextInput, ScrollView } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,

} from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRows from '../components/FeaturedRows';
import sanityClient from '../sanity';
import category from '../sanity/schemas/category';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
        sanityClient
            .fetch(
                `
                *[_type == "featured"] {
                    ...
                   }[]
        `
            ).then(data => {
                setFeaturedCategories(data);
            });
    }, []);
    /*console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(featuredCategories);*/

    return (
        <SafeAreaView className="bg-white pt-5 " style={{ marginTop: StatusBar.currentHeight }}>

            {/*Header*/}
            <View className="flex-row items-center space-x-2 pb-2 mx-2  px-2" >
                {/* flex-row items-center space-x-2 pb-2 mx-4 */}
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru",
                    }}
                    className="h-10 w-10 bg-gray-300 p-4 rounded-full"
                />

                <View className="flex-1" >
                    <Text className="font-bold text-gray-400 text-xs">
                        ¡Ordena ahora! ¡Recibe en fa!
                    </Text>
                    <Text className="font-bold text-xl">
                        Localización actual
                        <ChevronDownIcon size={20} color="#ff0051" />
                    </Text>
                </View>
                <UserIcon size={35} color="#ff0051" />
            </View>

            {/*Search*/}
            <View className="flex-row items-center space-x-2 pb-2 mx-4 px-2" >
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3" >
                    <MagnifyingGlassIcon color="#4B4B4B" size={20} />
                    <TextInput placeholder="Restaurantes o platillos"
                        keyboardType='default'
                    />

                </View>
                <AdjustmentsVerticalIcon color="#ff0051" />
            </View>

            {/* {body} */}
            <ScrollView
                className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            >
                {/* {categorias} */}
                <Categories />

                {/* {Reatured rows} */} 
                {featuredCategories?.map((category) => (
                    <FeaturedRows
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                        restaurantsName={category.restaurants}
                    />
                ))
                }

            </ScrollView>
        </SafeAreaView >
    );
};

export default HomeScreen;