
import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { Caption, Title } from 'react-native-paper';



import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const UserScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView style={styles.container} className="bg-white px-4">
            <View>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        style={styles.imgp}
                        source={{
                            uri: "https://www.maucastillo.com/proyectoMau/logo.jpeg"
                        }}
                        className='h-40 w-40 rounded-full'
                    />
                    <View style={{ marginLeft: 10, alignItems: 'center' }}>
                        <Title style={styles.title}>El pana Miguel</Title>
                        <Caption style={styles.Caption}>@elPanaMiguel</Caption>
                    </View>
                </View>
            </View>





            <TouchableOpacity
                onPress={navigation.goBack}
                className="absolute top-8 left-5 p-2 bg-gray-200 rounded-full">
                <ArrowLeftIcon size={20} color="#000" />
            </TouchableOpacity>

            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="map-marker-radius" color="#777777" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>Querétaro, Mexico</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="phone" color="#777777" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>+52 4411234567</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" color="#777777" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>panamiguel@email.com</Text>
                </View>
            </View>

            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox, {
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1
                }]}>
                    <Title>$545</Title>
                    <Caption>Wallet</Caption>
                </View>

                <View style={styles.infoBox}>
                    <Title>35</Title>
                    <Caption>Pedidos</Caption>
                </View>
            </View>

        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
    },
    imgp: {
        alignItems: 'center',


    },
    container2: {


    },
    userInfoSection: {
        marginTop: 30,
        marginBottom: 55,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default UserScreen;

