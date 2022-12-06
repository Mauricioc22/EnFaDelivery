import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View className="h-3/4 rounded-md mx-5 mt-[50%] mb-10 items-center">
            <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}>
                    <Image 
                        style={{width: 300, height: 300, }}
                        source={require('../assets/logo.png')}
                        className="mt-10 rounded-full"
                    />   
                </TouchableOpacity>
            </View>
        
        </SafeAreaView>
    )
}

export default LoginScreen