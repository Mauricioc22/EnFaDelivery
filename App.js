import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from './screens/RestaurantScreen';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import LoginScreen from './screens/LoginScreen';
import UserScreen from './screens/UserScreen';


import { Provider } from 'react-redux';
import { store } from './store';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
          <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{ headerShown: false}} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="User" component={UserScreen} />
            
            <Stack.Screen 
              name="Basket" 
              component={BasketScreen}
              options={{presentation: "modal", headerShown: false}} />
            <Stack.Screen 
              name="PreparingOrder" 
              component={PreparingOrderScreen}
              options={{ headerShown: false}} />
            <Stack.Screen 
              name="Delivery" 
              component={DeliveryScreen} 
              options={{ headerShown: false}} />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}