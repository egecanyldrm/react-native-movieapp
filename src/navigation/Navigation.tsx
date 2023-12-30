import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import Icon from 'react-native-vector-icons/AntDesign'
import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
   return (
      <Tab.Navigator
         //@ts-ignore
         screenOptions={({ route }: { route: any }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: { height: 80 },
            tabBarIcon: ({ focused }) => {
               if (route.name === 'Home') return (
                  <View style={styles.bottomBarIcon}>
                     <Icon name='home' size={30} />
                     <Text>Home</Text>
                  </View>
               )
            }
         })}
      >
         <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator >
   )
}

const Navigation = () => {
   return (
      <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
         <Tab.Screen name="Main" component={TabNavigation} />
      </Stack.Navigator>
   )
}

export default Navigation

const styles = StyleSheet.create({
   bottomBarIcon: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5
   }
})