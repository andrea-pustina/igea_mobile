import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OperationsScreen from "./screens/OperationsScreen";
import PatientsScreen from "./screens/PatientsScreen";
import SettingScreen from "./screens/SettingScreen";
import {Icon} from "native-base";
import {useEffect, useState} from "react";
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {AppLoading} from "expo";

const Tab = createBottomTabNavigator();

export default function App() {

    const [isReady, setIsReady] = useState<boolean>(false);

    useEffect(() => {
        const loadData = async () => {
            await Font.loadAsync({
                Roboto: require('native-base/Fonts/Roboto.ttf'),
                Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
                ...Ionicons.font,
            });

            setIsReady(true);
        }
        loadData();
    });

    return (
        <>
            {
                !isReady ? (
                    <AppLoading/>
                ) : (
                    <NavigationContainer>
                        <Tab.Navigator>
                            <Tab.Screen name="Operations"
                                        options={{
                                            tabBarLabel: "Interventi",
                                            tabBarIcon: ({focused, color, size}) => {
                                                return <Icon name={"car"} fontSize={size} style={{color: color}}/>
                                            }
                                        }}
                                        component={OperationsScreen}/>
                            <Tab.Screen name="Patients"
                                        options={{
                                            tabBarLabel: "Pazienti",
                                            tabBarIcon: ({focused, color, size}) => {
                                                return <Icon name={"man"} fontSize={size} style={{color: color}}/>
                                            }
                                        }}
                                        component={PatientsScreen}/>
                            <Tab.Screen name="Settings"
                                        options={{
                                            tabBarLabel: "Impostazioni",
                                            tabBarIcon: ({focused, color, size}) => {
                                                return <Icon name={"settings"} fontSize={size} style={{color: color}}/>
                                            }
                                        }}
                                        component={SettingScreen}/>
                        </Tab.Navigator>
                    </NavigationContainer>
                )
            }
        </>

    );
}
