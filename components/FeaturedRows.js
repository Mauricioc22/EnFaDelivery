import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ArrowRightIcon } from "react-native-heroicons/outline"

import sanityClient from '../sanity';

import RestaurantCard from './RestaurantCard';

const FeaturedRows = ({ id, title, description, restaurantsName }) => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        sanityClient
            .fetch(
                `
                *[_type == "featured" && _id == $id] {
                    ...,
                    restaurants[]->{
                        ...,
                        dishes[]->{
                            ...,
                        },
                        type->{
                            name
                        }
                    },
                   }[0]
        `
            , { id } ).then(data => {
                setRestaurants(data?.restaurants);
            });
    }, []);

    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">
                    {title}
                </Text>
                {/* <ArrowRightIcon color="#ff0051" /> */}
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                {/* {restaurantcards } */}

                {restaurants?.map(restaurant => (
                    <RestaurantCard
                        key={restaurant._id}
                        id={restaurant._id}
                        imgUrl={restaurant.image}
                        title={restaurant.name}
                        rating={restaurant.ratting}
                        type={restaurant.type.name}
                        address={restaurant.address}
                        short_description={restaurant.short_description}
                        dishes={restaurant.dishes}
                        
                    />
                ))
                }

                {/*<RestaurantCard
                    id={123}
                    imgUrl="https://scontent.fqro2-1.fna.fbcdn.net/v/t1.6435-9/143362025_1507990192737927_2063375815846621969_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeErlawS2jlIEEyeQCW3eWWHH4wICsam3SsfjAgKxqbdKwcAtE2HRlgQdXNOMxEZ7ADVu6NhlBHCeqnJk3hVQeiq&_nc_ohc=y0SUNnApGxoAX_Nz-RF&_nc_ht=scontent.fqro2-1.fna&oh=00_AfBMMjxJwrPRxACB-1iObdTZ6NwzArR6pq-Ypbq0BmC9pg&oe=63A4E453"
                    title="Takesabroso"
                    rating={5.0}
                    genre="Mexicana"
                    address="Art. 123 24, Tamsa, 94295, Ver."
                    short_description="Restaurante de tacos, bistecs, quesadillas, carnes asadas y sándwiches abundantes."
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://scontent.fqro2-1.fna.fbcdn.net/v/t1.6435-9/143362025_1507990192737927_2063375815846621969_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeErlawS2jlIEEyeQCW3eWWHH4wICsam3SsfjAgKxqbdKwcAtE2HRlgQdXNOMxEZ7ADVu6NhlBHCeqnJk3hVQeiq&_nc_ohc=y0SUNnApGxoAX_Nz-RF&_nc_ht=scontent.fqro2-1.fna&oh=00_AfBMMjxJwrPRxACB-1iObdTZ6NwzArR6pq-Ypbq0BmC9pg&oe=63A4E453"
                    title="Takesabroso"
                    rating={5.0}
                    genre="Mexicana"
                    address="Art. 123 24, Tamsa, 94295, Ver."
                    short_description="Restaurante de tacos, bistecs, quesadillas, carnes asadas y sándwiches abundantes."
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://scontent.fqro2-1.fna.fbcdn.net/v/t1.6435-9/143362025_1507990192737927_2063375815846621969_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeErlawS2jlIEEyeQCW3eWWHH4wICsam3SsfjAgKxqbdKwcAtE2HRlgQdXNOMxEZ7ADVu6NhlBHCeqnJk3hVQeiq&_nc_ohc=y0SUNnApGxoAX_Nz-RF&_nc_ht=scontent.fqro2-1.fna&oh=00_AfBMMjxJwrPRxACB-1iObdTZ6NwzArR6pq-Ypbq0BmC9pg&oe=63A4E453"
                    title="Takesabroso"
                    rating={5.0}
                    genre="Mexicana"
                    address="Art. 123 24, Tamsa, 94295, Ver."
                    short_description="Restaurante de tacos, bistecs, quesadillas, carnes asadas y sándwiches abundantes."
                    dishes={[]}
                    long={20}
                    lat={0}
            />*/}

            </ScrollView>
        </View>
    );
};

export default FeaturedRows;